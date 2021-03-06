Vim?UnDo? 7ӟ@??;Z???<?~p,??nL?l;'?|??S?  X   #    title: 'Senior UX/UI Designer',                              b???    _?                            ????                                                                                                                                                                                                                                                                                                                                                             b???     ?                   ?               5??                    	                     0      5?_?                             ????                                                                                                                                                                                                                                                                                                                                                             b???    ?             	   +import { useState, useEffect } from 'react'   "import Page from 'components/Page'   +import Group from 'components/SectionGroup'   (import Section from 'components/Section'   )import Main from 'components/SectionMain'   +import Aside from 'components/SectionAside'   *import Subtitle from 'components/Subtitle'   "import Link from 'components/Link'   $import Image from 'components/Image'   $import Human from 'components/Human'       const meta = {   "   title: 'Senior UX/UI Designer',      lead:   {      "We're looking for multiple UX/UI senior designers who will bring style and tears of joy and laughter to our world.",      tags: [],   *   image: 'people/senior_designer_xm6x9r',   0   footerImage: 'people/senior_designer_xm6x9r',      published: false,      publishedAt: false,      position: 90,      mainWidth: 50,      theme: 'white'   }       !const loadScript = async src => {   ,   return new Promise((resolve, reject) => {   5      const script = document.createElement('script')   .      script.addEventListener('load', resolve)   .      script.addEventListener('error', reject)   "      document.body.append(script)         script.src = src      })   }       const loadApp = async () => {      if (!process.browser) {         return      }          if (window.mountVueApp) {         window.mountVueApp()         return      }   $   if (!window.mountVueAppPromise) {   Y      window.mountVueAppPromise = loadScript('/static/seniorcaptcha/js/seniorcaptcha.js')      }      window.mountVueAppPromise         .then(() => {            window.mountVueApp()         })         .catch(e => {            //         })   }       const Content = () => {   0   const [confirm, setConfirm] = useState(false)          useEffect(() => {         if (confirm) {            loadApp()         }      }, [confirm])          return (         <Page>            <Group>               <Section>                  <Main write>   0                  <h1>Senior UX/UI designer</h1>   R                  <Subtitle>We are looking for a senior UX/UI designer.</Subtitle>                     <p>   k                     We need a senior UX/UI Designer. One with an attitude. One with experience (that's the   k                     senior part). One that knows what a nice interface looks like (that's the UX/UI part).                     </p>                         <p>   p                     We expect you to design complex web apps in a breeze, argument your stance and change it in   4                     case of good counter arguments.                     </p>                         <p>   n                     We also expect you to be able to put yourself in the end-user's shoes and understand that   m                     we're doing it for them. We're not drawing paintings - we're creating meaningful digital   "                     interactions.                     </p>       m                  <p>If designing websites and apps makes you smile - you're the human we're looking for.</p>       +                  <h2>Our expectations</h2>                         <p>   o                     For starters, the best way to meet some expectations is by making a list. Here’s what we   %                     expect from you:                     </p>                         <ul>   8                     <li>Over 3 years of experience</li>                        <li>   j                        Expertise in designing alluring and intuitive user experiences for a wide range of   .                        devices and interfaces                        </li>   e                     <li>Know how to determine the information architecture of a digital product</li>   c                     <li>Strong sense of which design elements will increase user interactions</li>                        <li>   l                        Advanced communication skills, problem-solving skills, and ability to discuss design                           options                        </li>   e                     <li>Experienced in working with developers, designers, and project managers</li>   [                     <li>Exceptional attention to detail (the devil is in the details)</li>   .                     <li>Figma power-user</li>   S                     <li>BSc in design, digital media or other relevant fields</li>                     </ul>       '                  <p>Bonus points: </p>                         <ul>   8                     <li>Animation / motion design </li>   @                     <li>Experience in conducting workshops</li>   2                     <li>Good conceptualizing</li>   R                     <li>Experience in creating interesting brands (branding)</li>   p                     <li>A delicate sense of humour (or at least master of bad jokes that are cringeworthy)</li>                     </ul>       /                  <h2>What's in it for you</h2>                     <p>   p                     A lot. Steady job in a company many people would like to work at. An opportunity to grow as   q                     high as a kite. Or at least as high as your skills and “I want more” take you. A team of   X                     people like you’ve never seen before. It’s amazing to be Human.                     </p>                     <p>   :                     What about an office ping pong table?                        <br />   q                     Yes, we are fully aware that is not a thing anymore. Feel free to imagine we don't have one.                     </p>       i                  <p>But there is a list of things we do promise and it's not too shabby. Here we go:</p>                         <ul>   ?                     <li>flexible hours, flexible location</li>   a                     <li>a paycheck that defines itself based on what you bring to the table</li>   A                     <li>extra off-days for the virtuous few</li>   <                     <li>career switching possibilities</li>   U                     <li>paid overtime (hard currency or equivalent in days off)</li>   M                     <li>pet-friendly office (as long as you clean poop)</li>   3                     <li>no open office spaces</li>   c                     <li>opportunity to work on digital products used by many, maaaaany people</li>                        <li>   n                        after-work social clubbing down in our cosy basement (optional if you're an introvert,   (                        that's fine too)                        </li>                        <li>   n                        work equipment (this you knew was coming), with ample beer in the fridge (this you did                           not)                        </li>                     </ul>                         <p>   q                     This list could have been three times longer, but who cares about fresh fruit in the office.   m                     It's more important that you can design your paycheck and your working hours, and that's   7                     something we can guarantee to you.                     </p>       Q                  <p>And no. You will not get a Tesla for your birthday. Yet.</p>                         <p>   O                     Send us your CV and your git URL/some code samples at{' '}                        <a   ?                        href="mailto:jobs@humaninteraction.com"   0                        data-gtm-category="Link"   1                        data-gtm-action="Contact"   .                        data-gtm-label="Beer">   1                        jobs@humaninteraction.com                        </a>{' '}   4                     and let's eat peanuts together!                     </p>                         <p>                        <small>                           <i>   a                           &#42; By sending your application you confirm that you accept our{' '}   G                           <Link href="/privacy">Privacy policy</Link>.                           </i>                        </small>                     </p>       ,                  <h2>Show us your work</h2>                     <p>   q                     Send us your CV and portfolio. But not just pretty pictures. Tell us about your projects. We   h                     want to know everything: what was your task, your approach, all the problems you've   Z                     encountered along the way, solutions, variations. Really, everything.                     </p>       4                  <p id="seniorCaptchaWrapperLabel">   Q                     To continue, please confirm we understand each other: <br />   :                     <label style={{ cursor: 'pointer' }}>                           <input   *                           type="checkbox"   /                           name="hiThisIsMario"   ,                           checked={confirm}   <                           onChange={() => setConfirm(true)}                           />{' '}   %                        {!confirm ? (   R                           <span style={{ color: '#FB3E31', fontWeight: 'bold' }}>   J                              I understand what a senior UX/UI designer is   "                           </span>                           ) : (   7                           <>We'll see about that...</>                           )}                        </label>                     </p>                         <p>                        <small>                           <i>   a                           &#42; By sending your application you confirm that you accept our{' '}   G                           <Link href="/privacy">Privacy policy</Link>.                           </i>                        </small>                     </p>       ,                  <h2>Our point of view</h2>                     <p>   p                     We choose technologies according to specific project needs. We don't use an axe to unwind a   o                     screw. If we get stuck, we don't beat our head against the wall - we Google, ask questions   *                     and learn new things.                     </p>                     <p>   p                     We don't care who's in the office from 9 to 5. We don't have stop watches. What's important   9                     is a high quality of our deliveries.                     </p>                     <p>   n                     We're not big on formalities either. Healthy, direct relationship and communication comes   n                     before anything. Solid arguments always win over hierarchy. "Bugger off" is fine as well.                     </p>                     <p>   m                     When under a deadline, we grind our teeth and do the job. When not, we drink beer. Or we   :                     make our own. It’s good. Sometimes.                     </p>                         <h2>   $                     We're <Human />                     </h2>                     <p>   l                     We've been developing and designing websites and apps for 18 years and counting. You've   o                     probably used some of the projects we did like RTL, NovaTV, Dnevnik, Coolinarika, Podravka                        or Lino.                     </p>       1                  <Link href="/people" preview />                  </Main>   (               <Aside focusAt={[35, 0]}>   O                  <Image name="people/senior_designer_xm6x9r" quality="good" />                  </Aside>               </Section>            </Group>   *         <div id="seniorCaptchaWrapper" />         </Page>      )   }       export default Content       export { meta }?        
      #    title: 'Senior UX/UI Designer',?        
      	    lead:?        
      }        "We're looking for multiple UX/UI senior designers who will bring style and tears of joy and laughter to our world.",?        
          tags: [],?        
      +    image: 'people/senior_designer_xm6x9r',?        
      1    footerImage: 'people/senior_designer_xm6x9r',?        
          published: false,?        
          publishedAt: false,?        
          position: 90,?        
          mainWidth: 50,?        
          theme: 'white'?        
      -    return new Promise((resolve, reject) => {?        
      7        const script = document.createElement('script')?        
      0        script.addEventListener('load', resolve)?         
      0        script.addEventListener('error', reject)?      !  
      $        document.body.append(script)?       "  
              script.src = src?   !   #  
          })?   %   '  
          if (!process.browser) {?   &   (  
              return?   '   )  
          }?   )   +  
          if (window.mountVueApp) {?   *   ,  
              window.mountVueApp()?   +   -  
              return?   ,   .  
          }?   -   /  
      %    if (!window.mountVueAppPromise) {?   .   0  
      [        window.mountVueAppPromise = loadScript('/static/seniorcaptcha/js/seniorcaptcha.js')?   /   1  
          }?   0   2  
          window.mountVueAppPromise?   1   3  
              .then(() => {?   2   4  
                   window.mountVueApp()?   3   5  
      
        })?   4   6  
              .catch(e => {?   5   7  
                  //?   6   8  
      
        })?   :   <  
      1    const [confirm, setConfirm] = useState(false)?   <   >  
          useEffect(() => {?   =   ?  
              if (confirm) {?   >   @  
                  loadApp()?   ?   A  
      	        }?   @   B  
          }, [confirm])?   B   D  
          return (?   C   E  
              <Page>?   D   F  
                  <Group>?   E   G  
                      <Section>?   F   H  
                           <Main write>?   G   I  
      6                        <h1>Senior UX/UI designer</h1>?   H   J  
      X                        <Subtitle>We are looking for a senior UX/UI designer.</Subtitle>?   I   K  
                              <p>?   J   L  
      r                            We need a senior UX/UI Designer. One with an attitude. One with experience (that's the?   K   M  
      r                            senior part). One that knows what a nice interface looks like (that's the UX/UI part).?   L   N  
                              </p>?   N   P  
                              <p>?   O   Q  
      w                            We expect you to design complex web apps in a breeze, argument your stance and change it in?   P   R  
      ;                            case of good counter arguments.?   Q   S  
                              </p>?   S   U  
                              <p>?   T   V  
      u                            We also expect you to be able to put yourself in the end-user's shoes and understand that?   U   W  
      t                            we're doing it for them. We're not drawing paintings - we're creating meaningful digital?   V   X  
      )                            interactions.?   W   Y  
                              </p>?   Y   [  
      s                        <p>If designing websites and apps makes you smile - you're the human we're looking for.</p>?   [   ]  
      1                        <h2>Our expectations</h2>?   ]   _  
                              <p>?   ^   `  
      v                            For starters, the best way to meet some expectations is by making a list. Here’s what we?   _   a  
      ,                            expect from you:?   `   b  
                              </p>?   b   d  
                              <ul>?   c   e  
      ?                            <li>Over 3 years of experience</li>?   d   f  
                                   <li>?   e   g  
      r                                Expertise in designing alluring and intuitive user experiences for a wide range of?   f   h  
      6                                devices and interfaces?   g   i  
      !                            </li>?   h   j  
      l                            <li>Know how to determine the information architecture of a digital product</li>?   i   k  
      j                            <li>Strong sense of which design elements will increase user interactions</li>?   j   l  
                                   <li>?   k   m  
      t                                Advanced communication skills, problem-solving skills, and ability to discuss design?   l   n  
      '                                options?   m   o  
      !                            </li>?   n   p  
      l                            <li>Experienced in working with developers, designers, and project managers</li>?   o   q  
      b                            <li>Exceptional attention to detail (the devil is in the details)</li>?   p   r  
      5                            <li>Figma power-user</li>?   q   s  
      Z                            <li>BSc in design, digital media or other relevant fields</li>?   r   t  
                              </ul>?   t   v  
      -                        <p>Bonus points: </p>?   v   x  
                              <ul>?   w   y  
      ?                            <li>Animation / motion design </li>?   x   z  
      G                            <li>Experience in conducting workshops</li>?   y   {  
      9                            <li>Good conceptualizing</li>?   z   |  
      Y                            <li>Experience in creating interesting brands (branding)</li>?   {   }  
      w                            <li>A delicate sense of humour (or at least master of bad jokes that are cringeworthy)</li>?   |   ~  
                              </ul>?   ~   ?  
      5                        <h2>What's in it for you</h2>?      ?  
                              <p>?   ?   ?  
      w                            A lot. Steady job in a company many people would like to work at. An opportunity to grow as?   ?   ?  
      x                            high as a kite. Or at least as high as your skills and “I want more” take you. A team of?   ?   ?  
      _                            people like you’ve never seen before. It’s amazing to be Human.?   ?   ?  
                              </p>?   ?   ?  
                              <p>?   ?   ?  
      A                            What about an office ping pong table??   ?   ?  
      "                            <br />?   ?   ?  
      x                            Yes, we are fully aware that is not a thing anymore. Feel free to imagine we don't have one.?   ?   ?  
                              </p>?   ?   ?  
      o                        <p>But there is a list of things we do promise and it's not too shabby. Here we go:</p>?   ?   ?  
                              <ul>?   ?   ?  
      F                            <li>flexible hours, flexible location</li>?   ?   ?  
      h                            <li>a paycheck that defines itself based on what you bring to the table</li>?   ?   ?  
      H                            <li>extra off-days for the virtuous few</li>?   ?   ?  
      C                            <li>career switching possibilities</li>?   ?   ?  
      \                            <li>paid overtime (hard currency or equivalent in days off)</li>?   ?   ?  
      T                            <li>pet-friendly office (as long as you clean poop)</li>?   ?   ?  
      :                            <li>no open office spaces</li>?   ?   ?  
      j                            <li>opportunity to work on digital products used by many, maaaaany people</li>?   ?   ?  
                                   <li>?   ?   ?  
      v                                after-work social clubbing down in our cosy basement (optional if you're an introvert,?   ?   ?  
      0                                that's fine too)?   ?   ?  
      !                            </li>?   ?   ?  
                                   <li>?   ?   ?  
      v                                work equipment (this you knew was coming), with ample beer in the fridge (this you did?   ?   ?  
      $                                not)?   ?   ?  
      !                            </li>?   ?   ?  
                              </ul>?   ?   ?  
                              <p>?   ?   ?  
      x                            This list could have been three times longer, but who cares about fresh fruit in the office.?   ?   ?  
      t                            It's more important that you can design your paycheck and your working hours, and that's?   ?   ?  
      >                            something we can guarantee to you.?   ?   ?  
                              </p>?   ?   ?  
      W                        <p>And no. You will not get a Tesla for your birthday. Yet.</p>?   ?   ?  
                              <p>?   ?   ?  
      V                            Send us your CV and your git URL/some code samples at{' '}?   ?   ?  
                                  <a?   ?   ?  
      G                                href="mailto:jobs@humaninteraction.com"?   ?   ?  
      8                                data-gtm-category="Link"?   ?   ?  
      9                                data-gtm-action="Contact"?   ?   ?  
      6                                data-gtm-label="Beer">?   ?   ?  
      9                                jobs@humaninteraction.com?   ?   ?  
      %                            </a>{' '}?   ?   ?  
      ;                            and let's eat peanuts together!?   ?   ?  
                              </p>?   ?   ?  
                              <p>?   ?   ?  
      #                            <small>?   ?   ?  
      #                                <i>?   ?   ?  
      j                                    &#42; By sending your application you confirm that you accept our{' '}?   ?   ?  
      P                                    <Link href="/privacy">Privacy policy</Link>.?   ?   ?  
      $                                </i>?   ?   ?  
      $                            </small>?   ?   ?  
                              </p>?   ?   ?  
      2                        <h2>Show us your work</h2>?   ?   ?  
                              <p>?   ?   ?  
      x                            Send us your CV and portfolio. But not just pretty pictures. Tell us about your projects. We?   ?   ?  
      o                            want to know everything: what was your task, your approach, all the problems you've?   ?   ?  
      a                            encountered along the way, solutions, variations. Really, everything.?   ?   ?  
                              </p>?   ?   ?  
      :                        <p id="seniorCaptchaWrapperLabel">?   ?   ?  
      X                            To continue, please confirm we understand each other: <br />?   ?   ?  
      A                            <label style={{ cursor: 'pointer' }}>?   ?   ?  
      &                                <input?   ?   ?  
      3                                    type="checkbox"?   ?   ?  
      8                                    name="hiThisIsMario"?   ?   ?  
      5                                    checked={confirm}?   ?   ?  
      E                                    onChange={() => setConfirm(true)}?   ?   ?  
      '                                />{' '}?   ?   ?  
      -                                {!confirm ? (?   ?   ?  
      [                                    <span style={{ color: '#FB3E31', fontWeight: 'bold' }}>?   ?   ?  
      T                                        I understand what a senior UX/UI designer is?   ?   ?  
      +                                    </span>?   ?   ?  
      %                                ) : (?   ?   ?  
      @                                    <>We'll see about that...</>?   ?   ?  
      "                                )}?   ?   ?  
      $                            </label>?   ?   ?  
                              </p>?   ?   ?  
                              <p>?   ?   ?  
      #                            <small>?   ?   ?  
      #                                <i>?   ?   ?  
      j                                    &#42; By sending your application you confirm that you accept our{' '}?   ?   ?  
      P                                    <Link href="/privacy">Privacy policy</Link>.?   ?   ?  
      $                                </i>?   ?   ?  
      $                            </small>?   ?   ?  
                              </p>?   ?   ?  
      2                        <h2>Our point of view</h2>?   ?   ?  
                              <p>?   ?   ?  
      w                            We choose technologies according to specific project needs. We don't use an axe to unwind a?   ?   ?  
      v                            screw. If we get stuck, we don't beat our head against the wall - we Google, ask questions?   ?   ?  
      1                            and learn new things.?   ?   ?  
                              </p>?   ?   ?  
                              <p>?   ?   ?  
      w                            We don't care who's in the office from 9 to 5. We don't have stop watches. What's important?   ?   ?  
      @                            is a high quality of our deliveries.?   ?   ?  
                              </p>?   ?   ?  
                              <p>?   ?   ?  
      u                            We're not big on formalities either. Healthy, direct relationship and communication comes?   ?   ?  
      u                            before anything. Solid arguments always win over hierarchy. "Bugger off" is fine as well.?   ?   ?  
                              </p>?   ?   ?  
                              <p>?   ?   ?  
      t                            When under a deadline, we grind our teeth and do the job. When not, we drink beer. Or we?   ?   ?  
      A                            make our own. It’s good. Sometimes.?   ?   ?  
                              </p>?   ?   ?  
                              <h2>?   ?   ?  
      +                            We're <Human />?   ?   ?  
                              </h2>?   ?   ?  
                              <p>?   ?   ?  
      s                            We've been developing and designing websites and apps for 18 years and counting. You've?   ?   ?  
      v                            probably used some of the projects we did like RTL, NovaTV, Dnevnik, Coolinarika, Podravka?   ?   ?  
      $                            or Lino.?   ?   ?  
                              </p>?   ?   ?  
      7                        <Link href="/people" preview />?   ?   ?  
                          </Main>?   ?   ?  
      -                    <Aside focusAt={[35, 0]}>?   ?     
      U                        <Image name="people/senior_designer_xm6x9r" quality="good" />?   ?    
                          </Aside>?       
                      </Section>?      
                  </Group>?      
      -            <div id="seniorCaptchaWrapper" />?      
              </Page>?      
          )5??                        ?/                    ?                        ?/                    ?                     	   ?/             	       ?                     	   ?/             	       ?                         z/                    ?    ?                     ]/                    ?    ?                     /                    ?    ?                     ?.                    ?    ?                     ?.                    ?    ?                     ?.                    ?    ?                     g.                    ?    ?                     B.                    ?    ?                     ?-                    ?    ?                     W-                    ?    ?                     ;-                    ?    ?                     -                    ?    ?                     ?,                    ?    ?                     ?,                    ?    ?                     ?,                    ?    ?                     t,                    ?    ?                     ?+                    ?    ?                     ?+                    ?    ?                     ?+                    ?    ?                     P+                    ?    ?                     ?*                    ?    ?                     ?*                    ?    ?                     ?*                    ?    ?                     `*                    ?    ?                     ?)                    ?    ?                     ?)                    ?    ?                     ?)                    ?    ?                     })                    ?    ?                     )                    ?    ?                     ?(                    ?    ?                     r(                    ?    ?                     ?(                    ?    ?                     !(                    ?    ?                     ?'                    ?    ?                      ?'                     ?    ?           $          ?'      $              ?    ?           $          '      $              ?    ?                      ?&                     ?    ?                     ?&                    ?    ?                     ?&                    ?    ?                     ?&                    ?    ?                     t&                    ?    ?                      Q&                     ?    ?           $          &      $              ?    ?                      ?%                     ?    ?           $          ?%      $              ?    ?           (          i%      (              ?    ?           $          %      $              ?    ?                      ?$                     ?    ?                      ?$                     ?    ?           $          q$      $              ?    ?           $          ;$      $              ?    ?           $          $      $              ?    ?           $          ?#      $              ?    ?                      ?#                     ?    ?                     e#                    ?    ?                     #                    ?    ?                     ?"                    ?    ?                     ?"                    ?    ?                     Q"                    ?    ?                     ?!                    ?    ?                     h!                    ?    ?                     L!                    ?    ?                     !                    ?    ?                     ?                     ?    ?                     ?                     ?    ?                      ?                      ?    ?           $          `       $              ?    ?           $          ?      $              ?    ?                      ?                     ?    ?                     ?                    ?    ?                     ?                    ?    ?                     s                    ?    ?                     7                    ?    ?                                         ?    ?                      ?                     ?    ?                      ?                     ?    ?                      f                     ?    ?                      -                     ?    ?                      ?                     ?    ?                     ?                    ?    ?                     o                    ?    ?                     S                    ?    ?                     ?                    ?    ?                     ?                    ?    ?                     ?                    ?    ?                     (                    ?    ?                     ?                    ?    ?                     ?                    ?    ?                     t                    ?    ?                     R                    ?    ?                      -                     ?    ?                      ?                     ?    ?                     ?                    ?    ?                     s                    ?    ?                      B                     ?    ?                      ?                     ?    ?                     ?                    ?    ?                     ?                    ?    ?                                         ?    ?                     ?                    ?    ?                     R                    ?    ?                                         ?    ?                     ?                    ?    ?                     \                    ?    ?                                         ?    ?                     ?                    ?    ?                     ?                    ?    ?                     i                    ?    ?                     ?                    ?    ?                     ?                    ?    ?                     ?                    ?    ?                     o                    ?    ?                     R                    ?    ?                     ?                    ?    ?                     y                    ?    ?                                         ?                         ?                    ?    ~                     ?                    ?    |                     ?                    ?    {                                         ?    z                     ?                    ?    y                     ?                    ?    x                     <                    ?    w                     ?                    ?    v                     ?                    ?    t                     ?                    ?    r                     ?                    ?    q                     6                    ?    p                                          ?    o                     ?                    ?    n                     0                    ?    m                                         ?    l                      ?                     ?    k                      q                     ?    j                     P                    ?    i                     ?                    ?    h                     x                    ?    g                     V                    ?    f                                           ?    e                      ?                     ?    d                     ?                    ?    c                     K                    ?    b                     .                    ?    `                                         ?    _                     ?                    ?    ^                     l                    ?    ]                     P                    ?    [                                         ?    Y                     ?                    ?    W                     ?                    ?    V                     `                    ?    U                     ?
                    ?    T                     u
                    ?    S                     Y
                    ?    Q                     ;
                    ?    P                     ?	                    ?    O                     ?	                    ?    N                     k	                    ?    L                     M	                    ?    K                     ?                    ?    J                     g                    ?    I                     K                    ?    H                     ?                    ?    G                     ?                    ?    F                     ?                    ?    E                     ?                    ?    D                  	   l             	       ?    C                     ]                    ?    B                     P                    ?    @                     =                    ?    ?                     3                    ?    >                  	                	       ?    =                                         ?    <                     ?                    ?    :                     ?                    ?    6                     ?                    ?    5                  	   ?             	       ?    4                     r                    ?    3                     g                    ?    2                  	   F             	       ?    1                     0                    ?    0                                         ?    /                                         ?    .                     ?                    ?    -                     ?                    ?    ,                     ?                    ?    +                     u                    ?    *                     X                    ?    )                     :                    ?    '                     3                    ?    &                     $                    ?    %                                         ?    !                     ?                    ?                          ?                    ?                         ?                    ?                         q                    ?                         @                    ?                                             ?                         ?                    ?                         ?                    ?                         ?                    ?                         }                    ?                         e                    ?                         O                    ?                                             ?                         ?                    ?                         ?                    ?                         e                    ?                         [                    ?                         7                    ?       $        V     ?       ?*      ?8      5?_?                             ????                                                                                                                                                                                                                                                                                                                                                             b???     ?              ?                     ?/* eslint-disable react/no-unescaped-entities, jsx-a11y/media-has-caption, max-len, jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */   +import { useState, useEffect } from 'react'5??                                         ?       5???