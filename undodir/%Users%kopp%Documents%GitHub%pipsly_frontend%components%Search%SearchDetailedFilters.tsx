Vim�UnDo� 1M�k�w�+�j"�+���2��tvp���؏���  �   Y         } mapFilters z-3 p-a h-50 w-200 bg-baby-powder py-10 px-20 b-radius-20 d-flex `}   g                           b�I    _�                             ����                                                                                                                                                                                                                                                                                                                                                             b��     �                      serviceProfessional,5��                          1                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             b��     �                      bussiness,5��                          1                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             b��     �                      pipslyPremium,5��                          1                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             b��     �                      freelancers,5��                          1                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             b��     �                      withRatingsShown,5��                          1                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             b��     �                      subSubSpecialization,5��                          Z                     5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             b��     �                      sort,5��                          Z                     5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             b��     �                .   const user = useRecoilValue(userStateAtom);5��                          �      /               5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             b��     �                /import { userStateAtom } from 'state/userAtom';5��                                 0               5�_�   
                       ����                                                                                                                                                                                                                                                                                                                                                             b��     �        �      8import { useRecoilState, useRecoilValue } from 'recoil';5��                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             b��     �        �      6import { useRecoilStateuseRecoilValue } from 'recoil';5��                         �                     5�_�                   [   7    ����                                                                                                                                                                                                                                                                                                                                                             b��     �   Z   \  �      O      const filtered = searchState[name].value.filter((val, i) => i !== index);5��    Z   7                  �
                     5�_�                    [   7    ����                                                                                                                                                                                                                                                                                                                                                             b�     �   Z   \  �      L      const filtered = searchState[name].value.filter((, i) => i !== index);5��    Z   7                  �
                     �    Z   9                 �
                    5�_�                    �   $    ����                                                                                                                                                                                                                                                                                                                                                             b�H    �   b   d  �               className={`${   #            searchState.showFilters�   f   h  �      Y         } mapFilters z-3 p-a h-50 w-200 bg-baby-powder py-10 px-20 b-radius-20 d-flex `}�   i   k  �      (            className={`d-flex f-s-18 ${   K               searchState.showFilters ? 'w-100-perc j-c-start  mb-20' : ''�   k   m  �                  }`}�   o   q  �      /               className={`icon mobile mr-15 ${   :                  searchState.showLeftSide ? '' : 'active'�   q   s  �                     }`}�   {   }  �      /               className={`icon mobile mr-15 ${   9                  searchState.showResults ? 'active' : ''�   }     �                     }`}�   �   �  �      J               className={`filterSpan pl-15 f-s-16 pointer d-flex a-i-c ${   )                  searchState.showFilters�   �   �  �                     } `}�   �   �  �      2                        className={`greenBorder ${   @                           accountType === 'all' ? 'active' : ''�   �   �  �                              }`}�   �   �  �      &                        className={`${   0                           accountType === 'all'�   �   �  �                              }`}�   �   �  �      2                        className={`greenBorder ${   A                           accountType === 'service_professional'�   �   �  �                              }`}�   �   �  �      &                        className={`${   A                           accountType === 'service_professional'�   �   �  �                              }`}�   �   �  �      2                        className={`greenBorder ${   E                           accountType === 'location' ? 'active' : ''�   �   �  �                              }`}�   �   �  �      &                        className={`${   5                           accountType === 'location'�   �   �  �                              }`}�        �      'import { useRecoilState} from 'recoil';   @import { AccountType, searchStateAtom } from 'state/searchAtom';   ?import { SpecializationEnum } from 'types/Specialization.enum';       %const SearchDetailedFilters = () => {   I   const [searchState, setSearchState] = useRecoilState(searchStateAtom);       
   const {         myConnections,         distance,         subSpecialization,         accountType,      } = searchState;5��                      �      f      Q      �    �                     �                     �    �   &                 �                     �    �                     p                    �    �   2                 )                     �    �                     �                    �    �   &                 �                     �    �                     o                    �    �   2                 �                     �    �                     d                    �    �   &                 �                     �    �                     M                    �    �   2                                      �    �                     �                    �    �   J                 D                     �    }                     ,                    �    {   /                 �                     �    q                     �                    �    o   /                 c                     �    k                     �                    �    i   (                 �                     �    f           	                	              �    b                    �                     5�_�                    [   7    ����                                                                                                                                                                                                                                                                                                                                                             b��     �   Z   \  �      L      const filtered = searchState[name].value.filter((, i) => i !== index);5��    Z   7                  �
                     5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                             b��     �              5��                          �      9               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             b��     �              5��                          1      @               5��