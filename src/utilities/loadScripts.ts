// utilities/loadScripts.ts
export function loadScripts() {
    const script1 = document.createElement('script');
    script1.src = "https://chimpstatic.com/mcjs-connected/js/users/fc417153d28f3861469938059/ae77c8e6a263344fe4c931182.js";
    script1.async = true;
    document.head.appendChild(script1);
  
    const script2 = document.createElement('script');
    script2.src = "https://chimpstatic.com/mcjs-connected/js/users/fc417153d28f3861469938059/ae77c8e6a263344fe4c931182.js";

    
    script2.async = true;
    document.head.appendChild(script2);
  }
  