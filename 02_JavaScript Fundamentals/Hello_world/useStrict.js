/* “use strict”
The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

For example:

"use strict";

// this code works the modern way
...
Quite soon we’re going to learn functions (a way to group commands), so let’s note in advance that "use strict" can be put at the beginning of a function. Doing that enables strict mode in that function only. But usually people use it for the whole script.

Ensure that “use strict” is at the top
Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.

Strict mode isn’t enabled here:

alert("some code");
// "use strict" below is ignored--it must be at the top

"use strict";

// strict mode is not activated
Only comments may appear above "use strict".

There’s no way to cancel use strict
There is no directive like "no use strict" that reverts the engine to old behavior.

Once we enter strict mode, there’s no going back.*/
(function() {
    'use strict';
  
    console.log("use stric inside function")
  })()
