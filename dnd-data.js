/* =====================================================================
   DESKTOP N DRAW - DATA FILE
   Website aur app INDEPENDENT hain: dono ke folder mein is file ki apni copy hai.
   Dono copies SAME rakhein (Claude dono update karke deta hai).

   KAISE UPDATE KAREIN
   - Naya episode live hua: course mein us episode ki line mein video:"" aur pdf:"" ke
     andar link paste karein.  Example:  video:"https://youtu.be/xxxx", pdf:"https://drive.google.com/..."
   - Quotes ( " ) aur comma ( , ) mat hatayiye. Link ke andar " na ho.
   - Paid PDF live karna: store mein url:"" ke andar Razorpay Payment Page link.
   - Free material: free:[ ] mein {title:"", desc:"", url:""} add karein.
   - Har update ke baad "updated" ki date badal dein.
   ===================================================================== */
window.DND = {
 updated: "2026-10-13",

 links: {
  website: "https://www.desktopndraw.com",
  app: "https://desktop-n-draw-academy.pages.dev",
  youtube: "https://www.youtube.com/@desktopndraw",
  instagram: "https://www.instagram.com/desktopndraw",
  email: "enquiry.desktopndraw@gmail.com"
 },

 business: { name: "Desktop N Draw", city: "Chhatrapati Sambhajinagar, Maharashtra, India" },

 // Reference Practice Sheet: pdf = Google Drive link (khaali ho to "Coming soon" dikhega)
 practiceSheet: { title: "Reference Practice Sheet", desc: "Print this sheet and practise by hand with a pencil on paper, or open it on your phone or tablet and draw digitally in ibisPaint X. It works for traditional art and digital art.", pdf: "" },

 // PAID PDF: url = Razorpay Payment Page link. image = cover, samples = look-inside pages (website only). url khaali ho to website par store chhupa rahega.
 store: [
  { title: "25 Art Projects — Step by Step", price: 49, url: "https://rzp.io/rzp/desktopndraw-25-art-projects", image: "assets/pdf-cover.webp", samples: ["assets/sample-1.webp", "assets/sample-2.webp", "assets/sample-3.webp"],
    desc: "A PDF guide with 25 drawing projects for ibisPaint X, made for beginners who want guided practice.",
    points: ["25 step-by-step drawing worksheets, one subject per page", "Each page: reference, construction grid, grid practice and freehand practice", "ibisPaint X brush, layer and canvas settings with a HEX colour palette"] }
 ],

 // FREE MATERIAL: showFree false = website aur app dono mein Free PDF section band (owner, 13 Oct 2026).
 // Wapas chalu karna ho to showFree: true karein.
 showFree: false,
 // FREE MATERIAL (Google Drive): { title: "", desc: "", url: "" }
 free: [],

 // 5 LEVELS (episode number from - to)
 levels: [
  { name: "Beginner", from: 1, to: 5 },
  { name: "Tools & Line Art", from: 6, to: 10 },
  { name: "Colouring & Shading", from: 11, to: 16 },
  { name: "Art Techniques", from: 17, to: 24 },
  { name: "Advanced Workflow", from: 25, to: 30 }
 ],

 // 30 EPISODES - ibisPaint X Masterclass (EP 01 se EP 30, isi order mein)
 course: [
  /* EP 01 */ { title: "Introduction to ibisPaint X", video: "https://youtu.be/2KVUk4y3cgU?si=j8YW-E4D0IBCQaOg", pdf: "https://drive.google.com/file/d/1DAORW41Mdr97ZFFAkCZNp6D4uDpgerOE/view?pli=1",
             desc: "Workspace overview and a first simple canvas.", task: "Set up your workspace and learn the basic flow." },
  /* EP 02 */ { title: "Full Interface Tour", video: "https://youtu.be/ZouuQ7ZICW0?si=NZ5Y9GoSUb1p0tSV", pdf: "https://drive.google.com/file/d/1yj6wGOKz_7KgazXYuEn_PQJBCl12y8xV/view?usp=drivesdk",
             desc: "Understand the canvas, toolbar, layers and menus.", task: "Locate the main controls before starting a drawing." },
  /* EP 03 */ { title: "Brush Tool Complete Guide", video: "https://youtu.be/HfujwQ8snKo?si=8GGbvE_I0piJapUo", pdf: "https://drive.google.com/file/d/1ZB_d1RYo7L-udY_bvmulfoLNFdt0iJoG/view",
             desc: "Compare brush types, size, opacity and stabilisation.", task: "Make line tests and choose a brush for clean outlines." },
  /* EP 04 */ { title: "Eraser Tool", video: "https://youtu.be/n7A2PNBHu0s?si=37FfS7yQD2Y_VjGW", pdf: "https://drive.google.com/file/d/17TCIYb84RxmkoaJS0Paq7RNlBR3CEH9l/view?usp=drivesdk",
             desc: "Erase cleanly without damaging nearby details.", task: "Practise erasing on a separate layer where possible." },
  /* EP 05 */ { title: "Layers Explained", video: "https://youtu.be/T85i7ZA_9Yo?si=McL40Gr1FDIV-7p2", pdf: "https://drive.google.com/file/d/1t1PuNDnljI8m655uXhYO4E02bNJj4_KT/view",
             desc: "Create, rename, reorder and adjust layer opacity.", task: "Use separate layers for sketch, line art and colour." },
  /* EP 06 */ { title: "Canvas & Resolution", video: "", pdf: "",
             desc: "Choose canvas dimensions and understand image quality.", task: "Select a canvas appropriate for the artwork and export use." },
  /* EP 07 */ { title: "Selection & Transform", video: "", pdf: "",
             desc: "Move, scale, rotate and select parts of a drawing.", task: "Practise transforming a simple shape without stretching it." },
  /* EP 08 */ { title: "Clipping & Alpha Lock", video: "", pdf: "",
             desc: "Control where colour is applied.", task: "Test clipping and alpha lock on a sample shape." },
  /* EP 09 */ { title: "Colour Picker & Palettes", video: "", pdf: "",
             desc: "Choose colours and build a limited palette.", task: "Create a palette with a base, shadow and highlight." },
  /* EP 10 */ { title: "Line Art & Clean Outlines", video: "", pdf: "",
             desc: "Improve smoothness, weight and confident strokes.", task: "Use long, deliberate strokes and zoom in only when needed." },
  /* EP 11 */ { title: "Flat Colouring", video: "", pdf: "",
             desc: "Fill shapes neatly and keep colours organised.", task: "Separate base colours from line art." },
  /* EP 12 */ { title: "Shading Basics", video: "", pdf: "",
             desc: "Add form shadows and cast shadows.", task: "Choose one light direction and keep shadows consistent." },
  /* EP 13 */ { title: "Highlights & Reflections", video: "", pdf: "",
             desc: "Add highlights to show material and volume.", task: "Use highlights sparingly and match the light source." },
  /* EP 14 */ { title: "Gradients & Blending", video: "", pdf: "",
             desc: "Build smooth transitions and avoid muddy colours.", task: "Blend two neighbouring colours on a test layer." },
  /* EP 15 */ { title: "Textures & Details", video: "", pdf: "",
             desc: "Add texture without overcrowding the artwork.", task: "Use texture only where it helps explain the material." },
  /* EP 16 */ { title: "Reference Images", video: "", pdf: "",
             desc: "Use visual references thoughtfully.", task: "Observe shape, proportion, lighting and colour before drawing." },
  /* EP 17 */ { title: "Symmetry & Rulers", video: "", pdf: "",
             desc: "Use guides to improve structure and accuracy.", task: "Check the result with guides on and off." },
  /* EP 18 */ { title: "Text & Shapes", video: "", pdf: "",
             desc: "Add simple typography and geometric elements.", task: "Keep text readable and align shapes intentionally." },
  /* EP 19 */ { title: "Backgrounds & Composition", video: "", pdf: "",
             desc: "Arrange subject, background and negative space.", task: "Create a simple background that supports the focal point." },
  /* EP 20 */ { title: "Portrait Basics", video: "", pdf: "",
             desc: "Block in facial proportions and features.", task: "Begin with simple guides before adding detail." },
  /* EP 21 */ { title: "Animal Drawing Basics", video: "", pdf: "",
             desc: "Construct animals from simple forms.", task: "Observe the silhouette before drawing small features." },
  /* EP 22 */ { title: "Nature & Plants", video: "", pdf: "",
             desc: "Draw leaves, flowers and natural shapes.", task: "Vary shape and direction to avoid repetitive forms." },
  /* EP 23 */ { title: "Light Source Study", video: "", pdf: "",
             desc: "Keep highlights and shadows consistent.", task: "Mark the light direction before rendering." },
  /* EP 24 */ { title: "Material Studies", video: "", pdf: "",
             desc: "Suggest metal, glass, fabric and wood with value.", task: "Change edge sharpness and highlight shape by material." },
  /* EP 25 */ { title: "Advanced Layer Workflow", video: "", pdf: "",
             desc: "Organise complex artwork for easier edits.", task: "Name important layers and keep a clear layer order." },
  /* EP 26 */ { title: "Time-saving Tools", video: "", pdf: "",
             desc: "Use selections, clipping and shortcuts effectively.", task: "Repeat a small workflow and note the steps." },
  /* EP 27 */ { title: "Artwork Cleanup", video: "", pdf: "",
             desc: "Polish edges, remove stray marks and check contrast.", task: "Inspect the whole canvas and the details before export." },
  /* EP 28 */ { title: "Export & Save", video: "", pdf: "",
             desc: "Choose a suitable file format and save a copy.", task: "Keep an editable project copy as well as a final image." },
  /* EP 29 */ { title: "Create a Finished Mini Artwork", video: "", pdf: "",
             desc: "Combine outline, colour, light and background.", task: "Plan the layers before painting and review the result." },
  /* EP 30 */ { title: "Final Practice Project", video: "", pdf: "",
             desc: "Apply the workflow to an original subject.", task: "Observe, construct, paint, review and make one improvement." }
 ],

 // 30 MINI ARTS (app mein inke step-by-step lessons hain; yahan sirf naam, emoji, goal)
 miniArts: [
  { title: "Simple Apple", emoji: "🍎", goal: "Basic shapes and a single light source." },
  { title: "Coffee Cup", emoji: "☕", goal: "Ellipses, clean edges and cast shadows." },
  { title: "Sunflower", emoji: "🌻", goal: "Petal rhythm, warm colour and centre texture." },
  { title: "Cute Cat", emoji: "🐱", goal: "Simple construction, expression and line art." },
  { title: "Mountain View", emoji: "🏔️", goal: "Layered silhouettes and atmospheric depth." },
  { title: "Sunset Beach", emoji: "🌅", goal: "Gradient sky, silhouettes and reflections." },
  { title: "Rainbow", emoji: "🌈", goal: "Colour order, smooth curves and clean edges." },
  { title: "Butterfly", emoji: "🦋", goal: "Symmetry, wing shapes and simple patterns." },
  { title: "Cute House", emoji: "🏠", goal: "Perspective basics and a limited palette." },
  { title: "Cactus", emoji: "🌵", goal: "Silhouette, pot shapes and highlights." },
  { title: "Tiny Mushroom", emoji: "🍄", goal: "Rounded forms and soft shading." },
  { title: "Ice Cream", emoji: "🍦", goal: "Stacked shapes, highlights and texture." },
  { title: "Little Fish", emoji: "🐟", goal: "Body construction and scale patterns." },
  { title: "Potted Plant", emoji: "🪴", goal: "Leaf variation and pot shading." },
  { title: "Cloud & Sun", emoji: "🌤️", goal: "Soft shapes and warm/cool contrast." },
  { title: "Strawberry", emoji: "🍓", goal: "Red gradients, seeds and leaf shapes." },
  { title: "Cute Ghost", emoji: "👻", goal: "Simple silhouette and expressive face." },
  { title: "Small Planet", emoji: "🪐", goal: "Circles, rings and light direction." },
  { title: "Butter Cookie", emoji: "🍪", goal: "Warm colours and scattered details." },
  { title: "Tiny Bird", emoji: "🐦", goal: "Body silhouette, beak and feather accents." },
  { title: "Watermelon Slice", emoji: "🍉", goal: "Bold colour blocks and seeds." },
  { title: "Lantern", emoji: "🏮", goal: "Symmetry, glow and contrast." },
  { title: "Little Turtle", emoji: "🐢", goal: "Shell pattern and overlapping forms." },
  { title: "Flower in a Jar", emoji: "🌷", goal: "Transparent glass cues and stems." },
  { title: "Mini Camera", emoji: "📷", goal: "Geometric forms and metallic details." },
  { title: "Cute Whale", emoji: "🐳", goal: "Large curves, soft shadows and water drops." },
  { title: "Fantasy Door", emoji: "🚪", goal: "Texture, framing and warm highlights." },
  { title: "Night Sky", emoji: "🌌", goal: "Layered colour, stars and focal point." },
  { title: "Tiny Dragon", emoji: "🐉", goal: "Character silhouette and accent colours." },
  { title: "Original Mini Art", emoji: "✨", goal: "Combine your favourite skills into your own design." }
 ],

 // DAILY DRAWING PROMPTS (website)
 prompts: [
  "Draw a cosy coffee cup",
  "Create a cute chibi cat",
  "Paint a bright red apple",
  "Draw a tiny potted cactus",
  "Create a sunset with three colours",
  "Design a butterfly with simple patterns",
  "Draw your favourite snack",
  "Make a mini mountain landscape",
  "Illustrate a flower in a glass jar",
  "Design a small fantasy house"
 ]
};
