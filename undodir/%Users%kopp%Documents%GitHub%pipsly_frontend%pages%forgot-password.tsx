Vim�UnDo� _|�S[ \�M��4k?��m��/"����^�f   �       �          	      	   	        b�2    _�       	             /   	    ����                                                                                                                                                                                                                                                                                                                            &   $       &   %       v   %    b�2     �   .   0        5��    .                      �      3               5�_�                  	   /        ����                                                                                                                                                                                                                                                                                                                            &   $       &   %       v   %    b�5    �   .   �       i   8   const handleInput = (name: string, data: IInput) => {         setFormData({            ...formData,   3         [name]: { value: data.value, errors: [] },   	      });      };       K   const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {         e.preventDefault();   %      const button = e.currentTarget;   ,      const originalText = button.innerText;   1      button.innerText = 'Sending reset link...';             try {   >         const res = await ApiService.endpoints.sendResetLink(                formData.email.value            );       )         button.innerText = originalText;            if (res.ok) {   #            setIsRequestSent(true);            } else {   &            toastError(res.errors[0]);   
         }            // userRes.data         } catch (error) {   )         button.innerText = originalText;   )         if (axios.isAxiosError(error)) {   7            return toastError(error.response?.data[0]);   
         }   8         return toastError('An unknown error ocurred.');         }      };          return (         <Layout            canonical=''            description=''            image=''   )         title='Forgot password - Pipsly'            nav            login            signup            footer         >            <main id='login'>               {isMobile && (   2               <div className='leftSideForMobile'>   7                  <LoginPipslyIconMobile width={280} />                  </div>               )}   3            <div className='wrapper mx-auto mt-50'>   X               <section className='containerLogIn d-flex justify-content-between mb-85'>   !                  {!isMobile && (   /                     <div className='leftSide'>   7                        <LoginPipslyIcon width={305} />                        </div>                     )}   8                  <div className='rightSide w-60-perc '>   M                     <h1 className='f-f-josefine f-w-700 f-s-45 text-center'>   '                        Forgot password                        </h1>   '                     {isRequestSent ? (   N                        <p className='text-center f-w-700 d-flex a-i-c j-c-c'>   ,                           <CheckmarkIcon />   2                           <span className='pl-7'>   @                              Reset link has been sent to email.   "                           </span>                           </p>                        ) : (   $                        <CustomForm>   '                           <CustomInput   *                              name='email'   *                              type='email'   :                              value={formData.email.value}   +                              label='Email'   7                              handleInput={handleInput}   ;                              classNameInputC='first mb-50'   $                              icon={   P                                 <Email width={20} className='icon emailIcon' />                                 }   ?                              placeholder='janedoe@janedoe.com'                              />   g                           <div className='wrapperBtnLogIn d-flex justify-content-center mt-10  mb-20'>   +                              <CustomButton   .                                 type='submit'   @                                 className='btn-primary mx-auto'   7                                 onClick={handleSubmit}   K                                 disabled={formData.email.value.length < 5}                                 >   0                                 Send reset link   -                              </CustomButton>   !                           </div>   %                        </CustomForm>                        )}                     </div>                  </section>               </div>            </main>         </Layout>      );   };       export default ForgotPasword;    �   �   �        5��    .       h      h       �      A      A      �    �                      �                     5�_�                   /       ����                                                                                                                                                                                                                                                                                                                            &   $       &   %       v   %    b�!     �   .   0   �      )   const [errors, ] = useState<string>();5��    .          	           �      	               5�_�                    /       ����                                                                                                                                                                                                                                                                                                                            4          4          v       b�$    �   .   0   �      '   const [errors] = useState<string>();5��    .                     �                     5�_�                     4       ����                                                                                                                                                                                                                                                                                                                            4          4          v       b�,     �   3   5   �      4         [nagge]: { value: data.value, errors: [] },5��    3                    4                    5�_�                    &   #    ����                                                                                                                                                                                                                                                                                                                            &   $       &   %       v   %    b�     �   &   '   �    �   %   '   �      D   const [isRequestSent, setIsRequesmtSent] = React.useState(false);5��    %   $                                       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             b��     �          �      -iport { useMediaQuery } from '@mui/material';5��                                                5�_�                    $        ����                                                                                                                                                                                                                                                                                                                                                             b�Q     �   #   %   �      #      :   const theme = useTheme();5��    #                      {                     5�_�                     $       ����                                                                                                                                                                                                                                                                                                                                                             b�T    �   �   �   �      );�   �   �   �         </Layout>�   �   �   �            </main>�   �   �   �               </div>�   �   �   �                  </section>�   �   �   �                     </div>�   �   �   �                        )}�   �   �   �      "                     </CustomForm>�   �   �   �                              </div>�   �   �   �      *                           </CustomButton>�   �   �   �      -                              Send reset link�   �   �   �                                 >�   �   �   �      H                              disabled={formData.email.value.length < 5}�   �   �   �      4                              onClick={handleSubmit}�   �   �   �      =                              className='btn-primary mx-auto'�   �   �   �      +                              type='submit'�   �   �   �      (                           <CustomButton�   �   �   �      d                        <div className='wrapperBtnLogIn d-flex justify-content-center mt-10  mb-20'>�   �   �   �                              />�   �   �   �      <                           placeholder='janedoe@janedoe.com'�   �   �   �                                 }�      �   �      M                              <Email width={20} className='icon emailIcon' />�   ~   �   �      !                           icon={�   }      �      8                           classNameInputC='first mb-50'�   |   ~   �      4                           handleInput={handleInput}�   {   }   �      (                           label='Email'�   z   |   �      7                           value={formData.email.value}�   y   {   �      '                           type='email'�   x   z   �      '                           name='email'�   w   y   �      $                        <CustomInput�   v   x   �      !                     <CustomForm>�   u   w   �                        ) : (�   t   v   �                           </p>�   s   u   �                              </span>�   r   t   �      =                           Reset link has been sent to email.�   q   s   �      /                        <span className='pl-7'>�   p   r   �      )                        <CheckmarkIcon />�   o   q   �      K                     <p className='text-center f-w-700 d-flex a-i-c j-c-c'>�   n   p   �      $                  {isRequestSent ? (�   m   o   �                        </h1>�   l   n   �      $                     Forgot password�   k   m   �      J                  <h1 className='f-f-josefine f-w-700 f-s-45 text-center'>�   j   l   �      5               <div className='rightSide w-60-perc '>�   i   k   �                     )}�   h   j   �                        </div>�   g   i   �      4                     <LoginPipslyIcon width={305} />�   f   h   �      ,                  <div className='leftSide'>�   e   g   �                     {!isMobile && (�   d   f   �      U            <section className='containerLogIn d-flex justify-content-between mb-85'>�   c   e   �      0         <div className='wrapper mx-auto mt-50'>�   b   d   �               )}�   a   c   �                  </div>�   `   b   �      4               <LoginPipslyIconMobile width={280} />�   _   a   �      /            <div className='leftSideForMobile'>�   ^   `   �               {isMobile && (�   ]   _   �            <main id='login'>�   \   ^   �         >�   [   ]   �            footer�   Z   \   �            signup�   Y   [   �            login�   X   Z   �      	      nav�   W   Y   �      &      title='Forgot password - Pipsly'�   V   X   �            image=''�   U   W   �            description=''�   T   V   �            canonical=''�   S   U   �      
   <Layout�   R   T   �      return (�   P   R   �      };�   O   Q   �         }�   N   P   �      5      return toastError('An unknown error ocurred.');�   M   O   �            }�   L   N   �      4         return toastError(error.response?.data[0]);�   K   M   �      &      if (axios.isAxiosError(error)) {�   J   L   �      &      button.innerText = originalText;�   I   K   �         } catch (error) {�   H   J   �            // userRes.data�   G   I   �            }�   F   H   �      #         toastError(res.errors[0]);�   E   G   �            } else {�   D   F   �                setIsRequestSent(true);�   C   E   �            if (res.ok) {�   B   D   �      &      button.innerText = originalText;�   @   B   �            );�   ?   A   �               formData.email.value�   >   @   �      ;      const res = await ApiService.endpoints.sendResetLink(�   =   ?   �         try {�   ;   =   �      .   button.innerText = 'Sending reset link...';�   :   <   �      )   const originalText = button.innerText;�   9   ;   �      "   const button = e.currentTarget;�   8   :   �         e.preventDefault();�   7   9   �      Hconst handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {�   5   7   �      };�   4   6   �         });�   3   5   �      0      [name]: { value: data.value, errors: [] },�   2   4   �            ...formData,�   1   3   �         setFormData({�   0   2   �      5const handleInput = (name: string, data: IInput) => {�   .   0   �      /const [errors, setErrors] = useState<string>();�   ,   .   �      });�   +   -   �         },�   *   ,   �            errors: [],�   )   +   �            value: '',�   (   *   �         email: {�   '   )   �      *const [formData, setFormData] = useState({�   %   '   �      @const [isRequestSent, setIsRequestSent] = React.useState(false);�   $   &   �      Dconst isMobile = useMediaQuery(theme.breakpoints.down(mobileWidth));�   #   %   �      !      : const theme = useTheme();5��    �                      �                     �    �                     �                    �    �           	          �      	              �    �                  	   �             	       �    �                     �                    �    �                     �                    �    �                     q                    �    �                     K                    �    �                     )                    �    �                     �                    �    �           !          �      !              �    �                     �                    �    �           !          ^      !              �    �           !          &      !              �    �           !          �      !              �    �           !          �      !              �    �                     �                    �    �                     "                    �    �                                         �    �                     �                    �    �                     �                    �               !          S      !              �    ~                     .                    �    }                     �                    �    |                     �                    �    {                     �                    �    z                     S                    �    y                     (                    �    x                     �                    �    w                     �                    �    v                     �                    �    u                     �                    �    t                     x                    �    s                     U                    �    r                                         �    q                     �                    �    p                     �                    �    o                     e                    �    n                     =                    �    m                     "                    �    l                     �                    �    k                     �                    �    j                     s                    �    i                     ^                    �    h                     B                    �    g                     
                    �    f                     �                    �    e                     �                    �    d                     _                    �    c                  	   +             	       �    b                  	                	       �    a                                         �    `                     �
                    �    _                     �
                    �    ^                  	   �
             	       �    ]           	          e
      	              �    \                     ]
                    �    [           	          M
      	              �    Z           	          =
      	              �    Y           	          .
      	              �    X           	          !
      	              �    W           	          �	      	              �    V           	          �	      	              �    U           	          �	      	              �    T           	          �	      	              �    S                     �	                    �    R                      �	                     �    P                      �	                     �    O                     �	                    �    N           	          U	      	              �    M           	          J	      	              �    L                  	   	             	       �    K           	          �      	              �    J           	          �      	              �    I                     �                    �    H           	          �      	              �    G           	          �      	              �    F                  	   [             	       �    E           	          I      	              �    D                  	   %             	       �    C           	                	              �    B           	          �      	              �    @           	          �      	              �    ?                  	   �             	       �    >           	          w      	              �    =                     k                    �    ;                     8                    �    :                                         �    9                     �                    �    8                     �                    �    7                                           �    5                      x                     �    4                     n                    �    3           	          :      	              �    2           	          $      	              �    1                                         �    0                      �                     �    .                      �                     �    ,                      �                     �    +                     �                    �    *           	          }      	              �    )           	          i      	              �    (                     Z                    �    '                      ,                     �    %                      �                     �    $                      �                     �    #                    �                    5��