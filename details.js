let img1;
let messages = []; // Array to store text messages
let currentMessageIndex = -1; // Index of the currently displayed message
let buttons = []; // Array to store buttons
let showMessage = false; // Initially set to false (message hidden)

function preload() {
  // Preload the image
  img1 = loadImage("assets/idol.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  // Create buttons
  let buttonPositions = [
    { x: 300, y: 240 },
    { x: 160, y: 460 },
    { x: 475, y: 355 },
    { x: 360, y: 570 },
  ];

  for (let i = 0; i < 4; i++) {
    let button = createImg("assets/info.png");
    button.size(25, 25); // Scales the button to width 30 and height 30
    button.position(buttonPositions[i].x, buttonPositions[i].y);
    button.mousePressed(() => showText(i)); // Use an anonymous function to pass i
    buttons.push(button);

    // Set messages (replace with your desired text)
    let message = "";
    switch (i) {
      case 0:
        message = `Tigers in Japan:
        
        Tigers in japan were both respected and feared by the community. In the year 720 AD the first writings of Tigers appeared in Japanese texts. The writing was a tale of Kashiwade no Omihasui, who went to the Korean kingdom of Kudara in 545 AD. When the ambassador and his family arrived at the peninsula coast, his child was carried away by a tiger. The Japanese ambassador hunted the animal and killed it once it was captured. The felines skin was brought back to Japan and was the first real encounter with the animal. (1)

        Poetry at the time also spoke about the tiger as a powerful Korean god. These connotations of the tiger as a powerful and scary being were carried to Japan from the mainlands.(1) Many childrens tales also discussed tigers as creatures to be feared. (1)

        As time went on, the tiger became more of a figure of health prosperity. The bones were thought to produce medicine to inhibit the spread of infection and paper mache tiger figures were often given to prevent disease. These perceived medicinal properties led to the mass poaching of the feline and further endangerment of the species as a whole. Beyond the bones and tiger’s body parts, the skin/fur itself was valued and imported from China. The general of the Japanese army placed high importance on the mass slaughtering of tigers in Korea to bring the skins back to Japan and reflect the army’s power. (1)
        
        The meaning of tigers in Japan continued to evolve and they began to represent bravery instead of danger. The statues and art they were included in became a sign of good fortune and the tiger soon became known as the protector of the nation. (1)
       
        Source (1): "https://tiger-universe.com/blogs/tiger-blog/why-the-tiger-is-so-popular-in-japan#`;

        break;

      case 1:
        message = `Size and material: 

        The size of the netsuke is small so as to not be too heavy on the kimono’s sash. They still required some weight though in order to hold the “inro” from falling to the ground. The choice material for the netsuke to achieve this weight was wood or more valuable, ivory. The ivory itself came from African elephant tusks imported by the Chinese and Dutch. (2)
        
        The tusk was hollow in the middle making it suitable for the cords to pass through the netsuke (i.e. the hollow bamboo that the tiger sits on to the left). Additionally, ivory was suitable for netsuke because their size allowed for more of the tusk to be used and prevented waste of the valuable material. (2) 

        Popular practice was to portray the front of the netsuke with the better part of the ivory tusk; any of  its imperfections were often made to be on the back side of the idol. (2)
        
       Source (2): Hutt, Julia. Japanese netsuke. London: V & A, 2003.`;

        break;

      case 2:
        message = `Carving and Presentation:

        The surface texture of the netsuke was very important to the craftsmen. Making sure that the depiction of animal fur was accurate gave these small statues a significant impact. Even when the design of the object called for less surface detail the craftsman required enormous skill to achieve a believable interpretation. (2)
        
        Sometimes upwards of 200 tools were required for a project. A netsuke like the one pictured to the left could take anywhere from 4-8 weeks to complete. Some of the tools involved in this craft  include saws, chisels, knives, files and drills of all sizes. At the end of each netsuke carving the statue was polished to remove any unwanted tool marks and eliminate all oils. This polishing process also highlighted the detail of the statue for its best presentation. (2)
        
        The maker’s strategically decorated the netsuke to move the viewer’s eye around the entire piece. In this example, the tiger’s body faces forward while it’s head looks backward encouraging the viewer to look in both directions and follow its gaze. This strategy is about counterbalance and sometimes pointed towards smaller details hidden in plain sight. Although netsuke were worn on the kimono sash (obi) and seen from the front angle, they were also displayed and meant to be inspected in the round. (2)
        
        Source (2): Hutt, Julia. Japanese netsuke. London: V & A, 2003.`;
        break;

      case 3:
        message =  `Subject Matter: 

        Japanese netsuke pictured common themes throughout time; travel,  landscapes, masks, and rats, monkeys, and tigers. The natural world was a great source of inspiration for the Japanese, frequently depicting animals, insects, birds, and sea creatures. (2)

        The rat, monkey, and tiger are related to the Japanese New Year. People would use different netsuke to depict whichever animal corresponded with the new year festivities. In the case of this netsuke, tigers were not native to Japan so any depiction of them was based off of tiger skins that had been imported or books that had illustrations of the feline. These references helped to extend the maker’s knowledge of their subject beyond their own personal experience. (2)

        Source (2): Hutt, Julia. Japanese netsuke. London: V & A, 2003. `;
        break;
    }
    messages.push(message);
  }
}

function draw() {
  background(255);

  // Draw the image
  image(img1, -250, -150, img1.width / 1.5, img1.height / 1.5);

  // Display the text message only if showMessage is true and there's a valid index
  if (
    showMessage &&
    currentMessageIndex >= 0 &&
    currentMessageIndex < messages.length
  ) {
    fill(0);
    textSize(14);
    textAlign(LEFT);
    text(messages[currentMessageIndex], 680, 160, img1.width / 3);
  }
}

function showText(index) {
  // Toggle message visibility
  showMessage = true;

  // Set the current message index
  currentMessageIndex = index;

  // Hide all other messages when showing a new one
  for (let i = 0; i < buttons.length; i++) {
    if (i !== index) {
      buttons[i].show();
    }
  }
}
