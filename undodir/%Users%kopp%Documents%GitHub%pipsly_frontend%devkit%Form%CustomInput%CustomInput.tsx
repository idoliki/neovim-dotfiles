Vim�UnDo� �9��*�(!a�o����n�sY7i)��p�e�   �   #            } inputComponent p-r `}   �                           b��?    _�                     �       ����                                                                                                                                                                                                                                                                                                                                                             b���     �   �   �   �      7                     disabled={preview ? !edit : false}5��    �                     �                     �    �                    �                    5�_�                    �   !    ����                                                                                                                                                                                                                                                                                                                                                             b��      �   �   �   �      9                     disabled={()preview ? !edit : false}5��    �                      �                     5�_�                    �   7    ����                                                                                                                                                                                                                                                                                                                                                             b��     �   �   �   �      8                     disabled={(preview ? !edit : false}5��    �   7                  �                     5�_�                    A       ����                                                                                                                                                                                                                                                                                                                                                             b��     �   A   C   �      	         �   A   C   �    5��    A                      �              
       �    A   	               	   �              	       5�_�                    @       ����                                                                                                                                                                                                                                                                                                                                                             b��     �   ?   @                   reRouting,5��    ?                      a                     5�_�                    %       ����                                                                                                                                                                                                                                                                                                                                                             b��     �   $   %             reRouting?: string;5��    $                      B                     5�_�                    %       ����                                                                                                                                                                                                                                                                                                                                                             b��     �   %   '   �         �   %   '   �    5��    %                      j                     �    %                  
   m              
       �    %                    v                    5�_�      	              A       ����                                                                                                                                                                                                                                                                                                                                                             b��     �   @   B   �               disabled,5��    @                                          �    @                    �                    5�_�      
           	   $       ����                                                                                                                                                                                                                                                                                                                                                             b��%    �   %   �   �   �      disabled?: string   }   )import InputMask from 'react-input-mask';       >const _csi = React.forwardRef<HTMLInputElement, ICustomInput>(      (         {            name,            value,            handleInput,            type,            required,            errors,            className,            classNameInputC,            label,            float,            preview,            edit,            labelClass,            errorClass,            index,            maxLength,            icon,            placeholder,            passwordConditions,            mask,            disabled = false,         },   	      ref   	   ) => {   &      const isForm = useFormContext();             if (!isForm) {            throw Error(   H            "You can't use CustomInput outside of CustomForm component!"            );         }       >      const [showPassword, setShowPassword] = useState(false);   B      const [showConditions, setShowConditions] = useState(false);   :      const [characters, setCharacters] = useState(false);   2      const [letter, setLetter] = useState(false);   :      const [numberPass, setNumberPass] = useState(false);   8      const [validPass, setValidPass] = useState(false);          const isNumberRegx = /\d/;   #      const letterRegx = /[a-z]/gi;       #      const validateInput = () => {   )         if (typeof value === 'string') {               handleInput(                  name,                  {   >                  value: value.replace(/\s{2,}/g, ' ').trim(),                     errors: [],                  },                  index               );   
         }       ;         //if (type === "email" && !validateEmail(value)) {   N         //    handleInput(name, { value, errors: ["EMAIL_INVALID"] }, index);            //}       *         if (required && isEmpty(value)) {               handleInput(                  name,   G               { value: value.toString(), errors: ['INPUT_REQUIRED'] },                  index               );   
         }   2         if (type === 'password' && value != '') {   ;            if (!!characters && !!letter && !!numberPass) {   "               setValidPass(true);               } else {   #               setValidPass(false);               }   
         }         };       (      const handleShowPassword = () => {   4         setShowPassword((prevState) => !prevState);         };       =      const handleOnChange = (name: string, val: string) => {   !         if (type !== 'number') {   A            handleInput(name, { value: val, errors: [] }, index);   (         } else if (type === 'number') {   -            if (validateNumber(val, float)) {   D               handleInput(name, { value: val, errors: [] }, index);               }   
         }         };             return (            <div   @            className={`${classNameInputC ? classNameInputC : ''   &               } inputComponent p-r `}   
         >               <div   `               className={`inputWrapper p-r ${preview ? 'preview' : ''} ${edit ? 'editable' : ''   0                  }  ${value ? 'hasText' : ''}`}               >                  {mask ? (                     <InputMask   E                     className={`${className ? className : 'f-s-16'}    ;                        ${value != '' ? 'filledInput' : ''}   -                        ${type === 'password'   )                           ? value !== ''   )                              ? validPass   2                                 ? 'validPassword'   4                                 : 'invalidPassword'   "                              : ''                              : ''                           }                           `}   "                     value={value}                         name={name}   #                     inputRef={ref}   K                     onChange={(e) => handleOnChange(name, e.target.value)}   3                     onBlur={() => validateInput()}   <                     onFocus={() => setShowConditions(true)}   <                     // onKeyPress={(e) => keyboardPress(e)}   *                     maxLength={maxLength}   9                     type={!showPassword ? type : 'text'}   7                     disabled={preview ? !edit : false}                         mask={mask}   #                     alwaysShowMask   .                     placeholder={placeholder}                     />                  ) : (                     <input   E                     className={`${className ? className : 'f-s-16'}    ;                        ${value != '' ? 'filledInput' : ''}   -                        ${type === 'password'   )                           ? value !== ''   )                              ? validPass   2                                 ? 'validPassword'   4                                 : 'invalidPassword'   "                              : ''                              : ''                           }                           `}   "                     value={value}                         name={name}                        ref={ref}   K                     onChange={(e) => handleOnChange(name, e.target.value)}   3                     onBlur={() => validateInput()}   <                     onFocus={() => setShowConditions(true)}   <                     // onKeyPress={(e) => keyboardPress(e)}   *                     maxLength={maxLength}   9                     type={!showPassword ? type : 'text'}   E                     disabled={(preview ? !edit : false) || disabled}   .                     placeholder={placeholder}                     />                  )}       (               {type === 'password' && (                     <span   W                     className={`iconWrapper ${passwordConditions ? 'passwordIcon' : ''                           }`}   1                     onClick={handleShowPassword}                     >   &                     {showPassword ? (   (                        <VisiblePassword   %                           width={20}   R                           className={`showPassword ${showPassword ? 'active' : ''   !                              }`}                           />                        ) : (   *                        <UnvisiblePassword   %                           width={20}   R                           className={`showPassword ${showPassword ? 'active' : ''   !                              }`}                           />                        )}                     </span>                  )}                  {icon &&   ?                  (type === 'email' && validateEmail(value) ? (   K                     <span className='iconWrapper validEmail'>{icon}</span>                     ) : (   @                     <span className='iconWrapper'>{icon}</span>                     ))}                      {label && (   M                  <label className={`${labelClass ? labelClass : 'f-s-16'}`}>                        {label}                     </label>                  )}               </div>   $            {errors?.map((e, i) => (                  <span   a                  className={`error f-s-12 is-warning danger mb-15 ${errorClass ? errorClass : ''                        }`}�   �   �   �                  className={`${   5               classNameInputC ? classNameInputC : ''�   �   �   �      #            } inputComponent p-r `}�   �   �   �      J               className={`inputWrapper p-r ${preview ? 'preview' : ''} ${   (                  edit ? 'editable' : ''�   �   �   �      -               }  ${value ? 'hasText' : ''}`}�   �   �   �                              ${   .                           type === 'password'�   �   �   �      ,                              ? value !== ''�   �   �   �      ,                                 ? validPass�   �   �   �      5                                    ? 'validPassword'�   �   �   �      7                                    : 'invalidPassword'�   �   �   �      %                                 : ''�   �   �   �      "                              : ''�   �   �   �                              ${   .                           type === 'password'�   �   �   �      ,                              ? value !== ''�   �   �   �      ,                                 ? validPass�   �   �   �      5                                    ? 'validPassword'�   �   �   �      7                                    : 'invalidPassword'�   �   �   �      %                                 : ''�   �   �   �      "                              : ''�   �   �   �      /                     className={`iconWrapper ${   @                        passwordConditions ? 'passwordIcon' : ''�   �   �   �                           }`}�   �   �   �      6                           className={`showPassword ${   :                              showPassword ? 'active' : ''�   �   �   �                                 }`}�   �   �   �      6                           className={`showPassword ${   :                              showPassword ? 'active' : ''�   �   �   �                                 }`}�   �   �   �      E                  className={`error f-s-12 is-warning danger mb-15 ${   1                     errorClass ? errorClass : ''�   �   �   �                        }`}5��    �                     5                    �    �   E                                      �    �                     +                    �    �   6                 �                     �    �                                         �    �   6                 �                     �    �                     �                    �    �   /                 �                     �    �                     c                    �    �           !          =      !              �    �           $       !         $       !       �    �           $       !   �      $       !       �    �           !          �      !              �    �                     u                    �    �                    E                     �    �                     �                    �    �           !          u      !              �    �           $       !   =      $       !       �    �           $       !         $       !       �    �           !          �      !              �    �                     �                    �    �                    }                     �    �                     o                    �    �   J                 E                     �    �                     �                    �    �                    �                     �    %      �      �       ~      �      �      5�_�   	              
   &       ����                                                                                                                                                                                                                                                                                                                                                             b��<     �   %   '   �         disabled?: string;5��    %                     x                     5�_�   
                 &       ����                                                                                                                                                                                                                                                                                                                                                             b��=     �   %   '   �         disabled?: ;5��    %                     x                     5�_�                     &       ����                                                                                                                                                                                                                                                                                                                                                             b��>    �   �   �   �   c   @            className={`${classNameInputC ? classNameInputC : ''   &               } inputComponent p-r `}   
         >               <div   `               className={`inputWrapper p-r ${preview ? 'preview' : ''} ${edit ? 'editable' : ''   0                  }  ${value ? 'hasText' : ''}`}               >                  {mask ? (                     <InputMask   E                     className={`${className ? className : 'f-s-16'}    ;                        ${value != '' ? 'filledInput' : ''}   -                        ${type === 'password'   )                           ? value !== ''   )                              ? validPass   2                                 ? 'validPassword'   4                                 : 'invalidPassword'   "                              : ''                              : ''                           }                           `}   "                     value={value}                         name={name}   #                     inputRef={ref}   K                     onChange={(e) => handleOnChange(name, e.target.value)}   3                     onBlur={() => validateInput()}   <                     onFocus={() => setShowConditions(true)}   <                     // onKeyPress={(e) => keyboardPress(e)}   *                     maxLength={maxLength}   9                     type={!showPassword ? type : 'text'}   7                     disabled={preview ? !edit : false}                         mask={mask}   #                     alwaysShowMask   .                     placeholder={placeholder}                     />                  ) : (                     <input   E                     className={`${className ? className : 'f-s-16'}    ;                        ${value != '' ? 'filledInput' : ''}   -                        ${type === 'password'   )                           ? value !== ''   )                              ? validPass   2                                 ? 'validPassword'   4                                 : 'invalidPassword'   "                              : ''                              : ''                           }                           `}   "                     value={value}                         name={name}                        ref={ref}   K                     onChange={(e) => handleOnChange(name, e.target.value)}   3                     onBlur={() => validateInput()}   <                     onFocus={() => setShowConditions(true)}   <                     // onKeyPress={(e) => keyboardPress(e)}   *                     maxLength={maxLength}   9                     type={!showPassword ? type : 'text'}   E                     disabled={(preview ? !edit : false) || disabled}   .                     placeholder={placeholder}                     />                  )}       (               {type === 'password' && (                     <span   W                     className={`iconWrapper ${passwordConditions ? 'passwordIcon' : ''                           }`}   1                     onClick={handleShowPassword}                     >   &                     {showPassword ? (   (                        <VisiblePassword   %                           width={20}   R                           className={`showPassword ${showPassword ? 'active' : ''   !                              }`}                           />                        ) : (   *                        <UnvisiblePassword   %                           width={20}   R                           className={`showPassword ${showPassword ? 'active' : ''   !                              }`}                           />                        )}                     </span>                  )}                  {icon &&   ?                  (type === 'email' && validateEmail(value) ? (   K                     <span className='iconWrapper validEmail'>{icon}</span>                     ) : (   @                     <span className='iconWrapper'>{icon}</span>                     ))}                      {label && (   M                  <label className={`${labelClass ? labelClass : 'f-s-16'}`}>                        {label}                     </label>                  )}               </div>   $            {errors?.map((e, i) => (                  <span   a                  className={`error f-s-12 is-warning danger mb-15 ${errorClass ? errorClass : ''                        }`}�   �   �   �                  className={`${   5               classNameInputC ? classNameInputC : ''�   �   �   �      #            } inputComponent p-r `}�   �   �   �      J               className={`inputWrapper p-r ${preview ? 'preview' : ''} ${   (                  edit ? 'editable' : ''�   �   �   �      -               }  ${value ? 'hasText' : ''}`}�   �   �   �                              ${   .                           type === 'password'�   �   �   �      ,                              ? value !== ''�   �   �   �      ,                                 ? validPass�   �   �   �      5                                    ? 'validPassword'�   �   �   �      7                                    : 'invalidPassword'�   �   �   �      %                                 : ''�   �   �   �      "                              : ''�   �   �   �                              ${   .                           type === 'password'�   �   �   �      ,                              ? value !== ''�   �   �   �      ,                                 ? validPass�   �   �   �      5                                    ? 'validPassword'�   �   �   �      7                                    : 'invalidPassword'�   �   �   �      %                                 : ''�   �   �   �      "                              : ''�   �   �   �      /                     className={`iconWrapper ${   @                        passwordConditions ? 'passwordIcon' : ''�   �   �   �                           }`}�   �   �   �      6                           className={`showPassword ${   :                              showPassword ? 'active' : ''�   �   �   �                                 }`}�   �   �   �      6                           className={`showPassword ${   :                              showPassword ? 'active' : ''�   �   �   �                                 }`}�   �   �   �      E                  className={`error f-s-12 is-warning danger mb-15 ${   1                     errorClass ? errorClass : ''�   �   �   �                        }`}5��    �                     7                    �    �   E                                      �    �                     -                    �    �   6                 �                     �    �                                         �    �   6                 �                     �    �                     �                    �    �   /                 �                     �    �                     e                    �    �           !          ?      !              �    �           $       !         $       !       �    �           $       !   �      $       !       �    �           !          �      !              �    �                     w                    �    �                    G                     �    �                     �                    �    �           !          w      !              �    �           $       !   ?      $       !       �    �           $       !   	      $       !       �    �           !          �      !              �    �                     �                    �    �                                         �    �                     q                    �    �   J                 G                     �    �                     �                    �    �                    �                     �    �      b      j       �      �      �      5��