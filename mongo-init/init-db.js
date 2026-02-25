db = db.getSiblingDB('persona_db');
db.createCollection('sociallinks');
db.sociallinks.createIndex({ gameId: 1 });

db.sociallinks.insertMany([
  {
    "gameId": "p3r",
    "id": "fool",
    "arcanaNumber": "00",
    "arcanaName": "Fool",
    "characterName": "SEES",
    "image": "/images/sees.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [{ "text": "Progride automaticamente com a historia.", "points": 0 }] }] }
    ]
  },
  {
    "gameId": "p3r",
    "id": "magician",
    "arcanaNumber": "01",
    "arcanaName": "Magician",
    "characterName": "Kenji",
    "image": "/images/kenji.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "Of course.", "points": 0 }, { "text": "No Way.", "points": 1 }, { "text": "That's a secret.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "I'm into older women, too.", "points": 1 }, { "text": "I prefer girls my age.", "points": 0 }, { "text": "I like them all!", "points": 1 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "What, of ramen?", "points": 0 }, { "text": "What, of school?", "points": 0 }, { "text": "What, of life?", "points": 3 }] },
        { "response": 2, "options": [{ "text": "Sounds impossible.", "points": 0 }, { "text": "Good luck!", "points": 1 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "Sure.", "points": 0 }, { "text": "Why?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Good luck!", "points": 3 }, { "text": "Don't do it.", "points": 0 }, { "text": "Whatever, man.", "points": 0 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "...Is that so?", "points": 1 }, { "text": "Okay...", "points": 3 }, { "text": "Good-looking, huh?", "points": 0 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "Just like that?", "points": 0 }, { "text": "Why?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "I've got plans already.", "points": 3 }, { "text": "Yeah, more than you do.", "points": 0 }, { "text": "Not even a little.", "points": 0 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "What happened?", "points": 1 }, { "text": "I'll eat it for you.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "In Fashion?", "points": 0 }, { "text": "Occult Living?", "points": 0 }, { "text": "Bride-to-Be?", "points": 1 }] },
        { "response": 3, "options": [{ "text": "Congrats!", "points": 1 }, { "text": "You're rushing things.", "points": 0 }, { "text": "Sure, whatever.", "points": 0 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "Spit it out!", "points": 1 }, { "text": "Are you in trouble?", "points": 3 }] },
        { "response": 2, "options": [{ "text": "You should go with her.", "points": 1 }, { "text": "You should talk it out.", "points": 1 }, { "text": "Figure it out yourself.", "points": 0 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "Cheer up, man.", "points": 0 }, { "text": "Let me handle this!", "points": 3 }, { "text": "Haha.", "points": 0 }] }
      ]},
      { "rank": 10, "responses": [{ "response": 1, "options": [] }] }
    ]
  },
  {
    "gameId": "p3r",
    "id": "priestess",
    "arcanaNumber": "02",
    "arcanaName": "Priestess",
    "characterName": "Fuuka",
    "image": "/images/fuuka.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "Sure.", "points": 3 }, { "text": "Don't do it.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "I can handle a bit.", "points": 0 }, { "text": "Maybe we can use it in battle.", "points": 0 }] },
        { "response": 3, "options": [{ "text": "Sure thing.", "points": 3 }, { "text": "Will it be good next time?", "points": 0 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "Just a dash or two.", "points": 3 }, { "text": "I don't add salt.", "points": 0 }, { "text": "Just dump in a ton.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "Just take it slow.", "points": 3 }, { "text": "Don't get discouraged already.", "points": 1 }, { "text": "Practice makes perfect.", "points": 1 }] },
        { "response": 3, "options": [{ "text": "Go to the bookstore.", "points": 0 }, { "text": "I'll help you find something.", "points": 0 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "Do you really need one?", "points": 0 }, { "text": "Start with the basics first.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "There's nothing you're good at?", "points": 0 }, { "text": "What about your Persona?", "points": 0 }, { "text": "You're a hard worker.", "points": 1 }] },
        { "response": 3, "options": [{ "text": "That's not true.", "points": 3 }, { "text": "Maybe you're right.", "points": 0 }, { "text": "Why do you think that?", "points": 1 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "It's good.", "points": 1 }, { "text": "You did a great job.", "points": 3 }] },
        { "response": 2, "options": [{ "text": "I'm glad I could help.", "points": 1 }, { "text": "I didn't do anything.", "points": 0 }] },
        { "response": 3, "options": [{ "text": "Thank you.", "points": 1 }, { "text": "I think I get it.", "points": 0 }, { "text": "Can you make more sometime?", "points": 3 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "Of course.", "points": 3 }, { "text": "You sure you're not overdoing it?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "That's the spirit.", "points": 3 }, { "text": "Don't get too carried away.", "points": 0 }, { "text": "You're already plenty useful.", "points": 1 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "What is it?", "points": 0 }, { "text": "Something wrong with that?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Yeah, I remember.", "points": 0 }, { "text": "But we were just in one.", "points": 0 }] },
        { "response": 3, "options": [{ "text": "You did nothing wrong.", "points": 0 }, { "text": "......", "points": 0 }, { "text": "That's messed up.", "points": 1 }] },
        { "response": 4, "options": [{ "text": "Is that the only reason?", "points": 0 }, { "text": "That's probably it.", "points": 0 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "I believe in myself.", "points": 1 }, { "text": "It's just my personality.", "points": 1 }, { "text": "I've never thought about it.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "Not at all.", "points": 1 }, { "text": "We'll see each other in the dorm.", "points": 1 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "She's right.", "points": 0 }, { "text": "Ahaha! That's funny.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "I feel the same way.", "points": 0 }, { "text": "Me too.", "points": 0 }] },
        { "response": 3, "options": [{ "text": "I love you, Fuuka.", "points": 3, "tag": "Romance" }, { "text": "We'll always be friends.", "points": 0, "tag": "Friendship" }] },
        { "response": 4, "options": [{ "text": "We'll be together forever.", "points": 0 }, { "text": "I'll treat you right.", "points": 0 }] },
        { "response": 5, "options": [{ "text": "Sure.", "points": 3 }, { "text": "I'm not confident.", "points": 0 }, { "text": "What are you gonna make?", "points": 0 }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "Are you nervous?", "points": 0 }, { "text": "You seem like your usual self.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Glad to hear it.", "points": 1 }, { "text": "I'm always here for you.", "points": 3 }] },
        { "response": 3, "options": [{ "text": "I love them!", "points": 3 }, { "text": "Your skills are impressive.", "points": 1 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "empress",
    "arcanaNumber": "03",
    "arcanaName": "Empress",
    "characterName": "Mitsuru",
    "image": "/images/mitsuru.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "Want me to treat you?", "points": 0 }, { "text": "Why not give it a try?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "Are you sad?", "points": 1 }, { "text": "Are you happy?", "points": 3 }] },
        { "response": 3, "options": [{ "text": "Maybe you're in love.", "points": 1 }, { "text": "Maybe you're anxious.", "points": 1 }, { "text": "It must be sadness.", "points": 1 }] },
        { "response": 4, "options": [{ "text": "I'm rooting for you.", "points": 0 }, { "text": "I heard nothing.", "points": 1 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "What's next for you?", "points": 0 }, { "text": "Did something happen?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "It's all for love.", "points": 3 }, { "text": "It's a social agreement.", "points": 0 }, { "text": "It's about compromise.", "points": 0 }] },
        { "response": 3, "options": [{ "text": "Do you have a boyfriend?", "points": 0 }, { "text": "That's a tough one.", "points": 0 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "...Said the rich girl.", "points": 0 }, { "text": "Glad you enjoyed it.", "points": 3 }] },
        { "response": 2, "options": [{ "text": "A motorcycle?", "points": 3 }, { "text": "You're not suited?", "points": 1 }] },
        { "response": 3, "options": [{ "text": "What a high-class biker.", "points": 1 }, { "text": "Let's go for a ride.", "points": 3 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "Looking for something specific?", "points": 1 }, { "text": "Need some help?", "points": 1 }, { "text": "Borrowing a book?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Did something happen?", "points": 0 }, { "text": "That doesn't sound good.", "points": 0 }] },
        { "response": 3, "options": [{ "text": "Is it really?", "points": 0 }, { "text": "I didn't know...", "points": 1 }] },
        { "response": 4, "options": [{ "text": "Are you sure about this?", "points": 1 }, { "text": "That's admirable.", "points": 0 }, { "text": "I'll do something about it.", "points": 3 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "I don't mind at all.", "points": 3 }, { "text": "Is that all you need?", "points": 1 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "Yes.", "points": 0 }, { "text": "No.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Vent all you want.", "points": 1 }, { "text": "This isn't like you.", "points": 1 }] },
        { "response": 3, "options": [{ "text": "That's up to you.", "points": 0, "tag": "Romance" }, { "text": "It's not meant to be.", "points": 0, "tag": "Friendship" }] },
        { "response": 4, "options": [{ "text": "Calm down, Mitsuru.", "points": 0 }, { "text": "Don't insult her father!", "points": 3 }] },
        { "response": 5, "options": [{ "text": "Don't give in.", "points": 3 }, { "text": "You sure about this?", "points": 2 }] },
        { "response": 6, "options": [{ "text": "Don't sweat it.", "points": 0 }, { "text": "You were awesome.", "points": 0 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "What happened?", "points": 1 }, { "text": "Don't worry about it.", "points": 0 }, { "text": "It made me happy.", "points": 3 }] },
        { "response": 2, "options": [{ "text": "Talk about bold.", "points": 0 }, { "text": "Your feelings?", "points": 0 }] },
        { "response": 3, "options": [{ "text": "I love you too", "points": 0, "tag": "Romance" }, { "text": "I'm sorry, but...", "points": 0, "tag": "Friendship" }] },
        { "response": 4, "options": [{ "text": "\"Mitsuru\"?", "points": 0 }, { "text": "What about it?", "points": 0 }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "I'll give it a try.", "points": 3 }, { "text": "I'm fine with the back.", "points": 1 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "emperor",
    "arcanaNumber": "04",
    "arcanaName": "Emperor",
    "characterName": "Hidetoshi",
    "image": "/images/hidetoshi.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [{ "response": 1, "options": [{ "text": "They've got a point.", "points": 0 }, { "text": "Sounds like nonsense.", "points": 3 }] }] },
      { "rank": 3, "responses": [{ "response": 1, "options": [{ "text": "What happened?", "points": 1 }, { "text": "No need to fight.", "points": 1 }] }] },
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "Knock it off!", "points": 0 }, { "text": "......", "points": 0 }] },
        { "response": 2, "options": [{ "text": "You went a little overboard.", "points": 0 }, { "text": "Looks like you're hard at work.", "points": 3 }] }
      ]},
      { "rank": 5, "responses": [{ "response": 1, "options": [{ "text": "They're the worst.", "points": 3 }, { "text": "You shouldn't accuse everyone.", "points": 0 }] }] },
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "You're not going home yet?", "points": 0 }, { "text": "\"It's nice\"?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "But I just got here...", "points": 3 }, { "text": "I think I'll stick around.", "points": 1 }] }
      ]},
      { "rank": 7, "responses": [{ "response": 1, "options": [{ "text": "It seems reasonable.", "points": 0 }, { "text": "It seems too harsh.", "points": 3 }] }] },
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "What do you mean?", "points": 0 }, { "text": "Why? Is something wrong?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "It wasn't me.", "points": 3 }, { "text": "You stood up for me?", "points": 1 }] }
      ]},
      { "rank": 9, "responses": [{ "response": 1, "options": [{ "text": "Don't blame yourself.", "points": 3 }, { "text": "What matters is you realized it.", "points": 3 }] }] },
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "Not too shabby.", "points": 3 }, { "text": "You were great.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "I cherish it.", "points": 3 }, { "text": "I guess I'll take it.", "points": 3 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "hierophant",
    "arcanaNumber": "05",
    "arcanaName": "Hierophant",
    "characterName": "Old Couple",
    "image": "/images/old-couple.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "[Name]", "points": 1 }, { "text": "......", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Thank you.", "points": 3 }, { "text": "I'm okay, thanks.", "points": 0 }] },
        { "response": 3, "options": [{ "text": "I'd like that.", "points": 0 }, { "text": "No, thank you.", "points": 0 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "Looking for something?", "points": 1 }, { "text": "Cleaning the store?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Best of luck.", "points": 1 }, { "text": "Can I help.", "points": 3 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "I should go too.", "points": 3 }, { "text": "I'll wait here.", "points": 3 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "I wouldn't worry about it.", "points": 1 }, { "text": "What tree?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Cheer up.", "points": 1 }, { "text": "It'll be ok.", "points": 1 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "You're overthinking it.", "points": 0 }, { "text": "Please don't fight.", "points": 3 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "What happened?", "points": 1 }, { "text": "Are you fighting again?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "The tree? A memorial?", "points": 0 }, { "text": "That's great.", "points": 1 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "A petitioner?", "points": 1 }, { "text": "A fan of yours?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "Sure, let's go.", "points": 3 }, { "text": "Right now?", "points": 3 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "What does the letter say?", "points": 1 }, { "text": "Why a letter?", "points": 1 }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "But... why?", "points": 3 }, { "text": "Oh well.", "points": 1 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "lovers",
    "arcanaNumber": "06",
    "arcanaName": "Lovers",
    "characterName": "Yukari",
    "image": "/images/yukari.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "Cute pink.", "points": 3 }, { "text": "Pure white.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "That's mean.", "points": 1 }, { "text": "Invite me over, then.", "points": 0 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "What makes you say that?", "points": 0 }, { "text": "......", "points": 0 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "Who was that?", "points": 0 }, { "text": "What was that about?", "points": 0 }, { "text": "Are you OK?", "points": 3 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "Look around", "points": 0 }, { "text": "Wait here", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Go look for her", "points": 0 }, { "text": "Wait a bit longer", "points": 0 }] },
        { "response": 3, "options": [{ "text": "I'm sorry.", "points": 3 }, { "text": "It's okay to rely on others.", "points": 0 }, { "text": "You're a girl, so...", "points": -1 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "You're quite welcome.", "points": 1 }, { "text": "Anytime.", "points": 3 }, { "text": "Thank you, too.", "points": 1 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "Sounds good.", "points": 3 }, { "text": "Let's go with everyone.", "points": 1 }, { "text": "Let's go just the two of us.", "points": 3 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "All right.", "points": 3 }, { "text": "I'm too lazy.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Will you let her do it?", "points": 0 }, { "text": "Do you want to see her?", "points": 0 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "Hello?", "points": 0 }, { "text": "......", "points": 3 }, { "text": "If it's nothing, I'm leaving.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "I love you.", "points": 0, "tag": "Romance" }, { "text": "You're a precious friend.", "points": 0, "tag": "Friendship" }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "Too late.", "points": 3 }, { "text": "I didn't say anything.", "points": 1 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "chariot",
    "arcanaNumber": "07",
    "arcanaName": "Chariot",
    "characterName": "Kazushi",
    "image": "/images/kazushi.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "Don't push yourself.", "points": 0 }, { "text": "Toughen Up!", "points": 1 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "Sorry, that sounds awful!", "points": 0 }, { "text": "Are you going to be okay?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "Will it heal?", "points": 1 }, { "text": "Take a break from practice.", "points": 0 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "Where have you been?", "points": 0 }, { "text": "Did you ditch?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "How did it go?", "points": 0 }, { "text": "That really sucks.", "points": 3 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "Back from the hospital?", "points": 1 }, { "text": "Did you ditch?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Take my shoulder!", "points": 3 }, { "text": "I'll carry you!", "points": 1 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "There's nothing you can do.", "points": 0 }, { "text": "Show some guts, man!", "points": 1 }] },
        { "response": 2, "options": [{ "text": "You promised?", "points": 0 }, { "text": "Why go so far?", "points": 1 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "How's your knee?", "points": 1 }, { "text": "Can you hide it?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "You have to get tougher!", "points": 3 }, { "text": "You can't win like this.", "points": 1 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "I don't know anything.", "points": 0 }, { "text": "......", "points": 1 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "I don't mind at all.", "points": 3 }, { "text": "No, not exactly.", "points": 0 }, { "text": "It's fine - I'm tough as hell.", "points": 1 }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "What about the big meet?", "points": 3 }, { "text": "What about your promise?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "You've got this!", "points": 1 }, { "text": "You've really grown up.", "points": 1 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "justice",
    "arcanaNumber": "08",
    "arcanaName": "Justice",
    "characterName": "Chihiro",
    "image": "/images/chihiro.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "Don't worry about it.", "points": 3 }, { "text": "I was bored anyways.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "I read the classics.", "points": 1 }, { "text": "I read manga.", "points": 1 }, { "text": "I read fashion magazines.", "points": 0 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "They have no shame.", "points": 1 }, { "text": "They're gonna kiss...?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "I agree.", "points": 1 }, { "text": "That's kind of extreme...", "points": 0 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "Get lost.", "points": 0 }, { "text": "... Hey", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Let's hold hands.", "points": 0 }, { "text": "I'm here for you.", "points": 3 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "I'm all ears.", "points": 2 }, { "text": "Something on your mind?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Yeah, she's in love.", "points": 3 }, { "text": "You're jumping to conclusions.", "points": 1 }] },
        { "response": 3, "options": [{ "text": "Hold her hand", "points": 3 }, { "text": "Kiss her", "points": -1 }, { "text": "Speak to her softly", "points": 0 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "Is it good?", "points": 3 }, { "text": "You're not buying it?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "What do you think now?", "points": 0 }, { "text": "What do you mean?", "points": 1 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "Try to remember.", "points": 0 }, { "text": "It's gotta be a misunderstanding.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "Don't worry.", "points": 0 }, { "text": "We have to do something...", "points": 1 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "That's all a misunderstanding.", "points": 0 }, { "text": "......", "points": 0 }] },
        { "response": 2, "options": [{ "text": "The rumors will stop soon.", "points": 0 }, { "text": "I know you're innocent.", "points": 1 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "Chihiro is innocent.", "points": 1 }, { "text": "You need to tell her yourself.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "I feel the same, Chihiro.", "points": 0, "tag": "Romance" }, { "text": "I like working with you, but...", "points": 0, "tag": "Friendship" }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "Thank you.", "points": 3 }, { "text": "I don't read shojo manga.", "points": 0 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "hermit",
    "arcanaNumber": "09",
    "arcanaName": "Hermit",
    "characterName": "Maya",
    "image": "/images/maya.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "Of course.", "points": 3 }, { "text": "... have we met?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Don't you like video games?", "points": 0 }, { "text": "Sunshine is overrated.", "points": 1 }, { "text": "Guess we're loners.", "points": 0 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "Oh really? o_O", "points": 1 }, { "text": "Are you an adult?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "You don't like your Job?", "points": 3 }, { "text": "Are you burned out?", "points": 0 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "Don't wanna get married?", "points": 0 }, { "text": "You'll need a boyfriend first.", "points": 0 }, { "text": "Let's plan our wedding, then.", "points": 3 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "Who's Mr. E?", "points": 1 }, { "text": "Are you drunk again?", "points": 0 }, { "text": "Do you mean S.O.B.?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "A drunken master?", "points": 1 }, { "text": "Maya's a reporter, right?", "points": 0 }, { "text": "Are you a teacher?", "points": 1 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "Calm down.", "points": 0 }, { "text": "What bastard?", "points": 3 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "What are you talking about?", "points": 0 }, { "text": "Age isn't the point.", "points": 1 }, { "text": "Well, yeah.", "points": 3 }] },
        { "response": 2, "options": [{ "text": "She, um... what?", "points": 1 }, { "text": "Calm down.", "points": 1 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "Are you talking to yourself?", "points": 0 }, { "text": "Hurry up and tell me.", "points": 3 }] },
        { "response": 2, "options": [{ "text": "What is he like?", "points": 1 }, { "text": "Are you gonna ask him out?", "points": 0 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "Not much we can do.", "points": 0 }, { "text": "No way!", "points": 1 }, { "text": "Whatever, I guess.", "points": 0 }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "About what?", "points": 0 }, { "text": "Oh, no worries.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "This is sudden.", "points": 0 }, { "text": "I'll miss you.", "points": 3 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "fortune",
    "arcanaNumber": "10",
    "arcanaName": "Fortune",
    "characterName": "Keisuke",
    "image": "/images/keisuke.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "What's wrong?", "points": 0 }, { "text": "Do you need some rest?", "points": 0 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "You've got talent.", "points": 3 }, { "text": "You got lucky.", "points": 0 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "You're quitting art club?", "points": 1 }, { "text": "You're pulling out of the competition?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "Complaining to me won't help you.", "points": 3 }, { "text": "So you're just gonna take it?", "points": 1 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "You should tell your dad!", "points": 3 }, { "text": "Now you don't have to quit!", "points": 3 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "So are you.", "points": 0 }, { "text": "What's the matter?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Will you study abroad?", "points": 1 }, { "text": "It's your choice now.", "points": 3 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "Do you want to be a doctor?", "points": 3 }, { "text": "Do you like art club?", "points": 0 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "It's okay, I'm fine.", "points": 3 }, { "text": "Of course. It's Keisuke.", "points": 0 }, { "text": "......", "points": 0 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "You can't go!", "points": 3 }, { "text": "Good luck!", "points": 0 }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "I understand.", "points": 3 }, { "text": "But why?", "points": 1 }, { "text": "Stop relying on others.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "Not at all.", "points": 3 }, { "text": "You kinda are.", "points": 1 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "strength",
    "arcanaNumber": "11",
    "arcanaName": "Strength",
    "characterName": "Yuko",
    "image": "/images/yuko.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "What happened?", "points": 3 }, { "text": "You did good.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "That's true.", "points": 3 }, { "text": "I don't think so.", "points": 0 }, { "text": "You haven't thought about it?", "points": 0 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "Does this happen often?", "points": 0 }, { "text": "Do you know who did it?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "I'm honored.", "points": 1 }, { "text": "I don't mind.", "points": 1 }, { "text": "It might be a problem.", "points": 0 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "Why not give it a go?", "points": 0 }, { "text": "That's for you to decide.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Sure thing.", "points": 1 }, { "text": "It's kind of a hassle.", "points": 0 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "You're right, that's impressive.", "points": 1 }, { "text": "That's not normal?", "points": 0 }, { "text": "It's because you teach so well.", "points": 2 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "You guys got this!", "points": 1 }, { "text": "Show some guts!", "points": 1 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "Are you sad?", "points": 0 }, { "text": "Are you relieved?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "Let's do it.", "points": 3 }, { "text": "Why?", "points": 0 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "A boy.", "points": 1 }, { "text": "A girl.", "points": 1 }, { "text": "I don't care.", "points": 0 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "A track and field star?", "points": 1 }, { "text": "An instructor?", "points": 3 }, { "text": "A nursery teacher?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "It's because I love you.", "points": 0, "tag": "Romance" }, { "text": "It's because you're a close friend.", "points": 0, "tag": "Friendship" }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "Is it important?", "points": 1 }, { "text": "What is it?", "points": 1 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "hanged",
    "arcanaNumber": "12",
    "arcanaName": "Hanged Man",
    "characterName": "Maiko",
    "image": "/images/maiko.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "Sure, let's go!", "points": 3 }, { "text": "Let's keep playing.", "points": 0 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "Don't worry, he'll be there.", "points": 3 }, { "text": "He'll probably forget.", "points": 0 }, { "text": "I really can't say.", "points": 0 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "That's great news.", "points": 3 }, { "text": "Of course they care.", "points": 3 }, { "text": "Nah, they don't care.", "points": 0 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "That's awful.", "points": 3 }, { "text": "Why would he do that?", "points": 0 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "Don't do it.", "points": 0 }, { "text": "Calm down.", "points": 1 }, { "text": "It's up to you.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "That should be enough.", "points": 3 }, { "text": "It'll take more than that.", "points": 0 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "We should look for her.", "points": 0 }, { "text": "It's probably your fault.", "points": 0 }, { "text": "Just leave her alone.", "points": 0 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "Hamburgers.", "points": 1 }, { "text": "Japanese food.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "You're a good girl.", "points": 3 }, { "text": "Not really.", "points": 0 }] },
        { "response": 3, "options": [{ "text": "Your dad.", "points": 3 }, { "text": "Your mom.", "points": 0 }, { "text": "You decide.", "points": 0 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "Friends forever.", "points": 3 }, { "text": "I might forget about you.", "points": 0 }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "I'm sure you will.", "points": 3 }, { "text": "No idea.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Sure.", "points": 3 }, { "text": "I'll think about it.", "points": 0 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "death",
    "arcanaNumber": "13",
    "arcanaName": "Death",
    "characterName": "Pharos",
    "image": "/images/pharos.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [{ "text": "Progride automaticamente com a historia.", "points": 0 }] }] }
    ]
  },
  {
    "gameId": "p3r",
    "id": "temperance",
    "arcanaNumber": "14",
    "arcanaName": "Temperance",
    "characterName": "Bebe",
    "image": "/images/bebe.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "Sure, let's go.", "points": 1 }, { "text": "You like sweets?", "points": 1 }, { "text": "There's nothing to show.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "I totally agree.", "points": 3 }, { "text": "What about your country?", "points": 0 }, { "text": "It's not that great.", "points": 0 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "I can do better.", "points": 1 }, { "text": "Thanks.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "What do you like?", "points": 0 }, { "text": "Why not western clothes?", "points": 1 }, { "text": "How about a kimono?", "points": 3 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "How come you're not working?", "points": 0 }, { "text": "Should we stop for today?", "points": 0 }, { "text": "Are you alright?", "points": 3 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "Sure.", "points": 1 }, { "text": "Why?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "You have to accept it.", "points": 0 }, { "text": "Just stay in Japan!", "points": 1 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "What's wrong?", "points": 0 }, { "text": "Why not take a break?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "I have your back!", "points": 3 }, { "text": "What will you do?", "points": 1 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "Will that be enough?", "points": 1 }, { "text": "That's a great idea.", "points": 3 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "When will it be done?", "points": 1 }, { "text": "He'll definitely agree!", "points": 3 }, { "text": "Less talk, more work.", "points": 0 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "Congrats!", "points": 1 }, { "text": "Aren't you homesick?", "points": 3 }, { "text": "Don't forget, you owe me.", "points": 0 }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "How does it look?", "points": 3 }, { "text": "Great work!", "points": 3 }] },
        { "response": 2, "options": [{ "text": "I'll be waiting for you.", "points": 3 }, { "text": "Good luck out there.", "points": 3 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "devil",
    "arcanaNumber": "15",
    "arcanaName": "Devil",
    "characterName": "Tanaka",
    "image": "/images/tanaka.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "\"Placebo.\"", "points": 3 }, { "text": "......", "points": 1 }] },
        { "response": 2, "options": [{ "text": "Wow.", "points": 1 }, { "text": "Can you even sell those?", "points": 1 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "Maybe a little.", "points": 3 }, { "text": "Not at all.", "points": 1 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "Sure have!", "points": 3 }, { "text": "Is that possible?", "points": 0 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "What happened?", "points": 0 }, { "text": "Whose face?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "It's all about the money...", "points": 1 }, { "text": "How bad is it?", "points": 0 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "Sounds fun.", "points": 3 }, { "text": "Sounds like a hassle.", "points": 0 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "Like what?", "points": 0 }, { "text": "Sort of...", "points": 1 }] },
        { "response": 2, "options": [{ "text": "The organic one.", "points": 3 }, { "text": "The one that looks good.", "points": 0 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "You must've misheard.", "points": 1 }, { "text": "Why would he say that?", "points": 3 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "Are you going to donate?", "points": 3 }, { "text": "You're not gonna donate?", "points": 0 }] }
      ]},
      { "rank": 10, "responses": [{ "response": 1, "options": [] }] }
    ]
  },
  {
    "gameId": "p3r",
    "id": "tower",
    "arcanaNumber": "16",
    "arcanaName": "Tower",
    "characterName": "Mutatsu",
    "image": "/images/mutatsu.png",
    "ranks": [
      { "rank": 1, "responses": [
        { "response": 1, "options": [{ "text": "Margarita.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Bloody Mary.", "points": 0 }] },
        { "response": 3, "options": [{ "text": "Screwdriver.", "points": 0 }] },
        { "response": 4, "options": [{ "text": "Oolong Tea.", "points": 0 }] }
      ]},
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "I came to see you, old man.", "points": 0 }, { "text": "None of your business.", "points": 3 }] },
        { "response": 2, "options": [{ "text": "How should I address you?", "points": 1 }, { "text": "Show respect?", "points": 0 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "I can't say I don't.", "points": 0 }, { "text": "I don't have any friends.", "points": 3 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "Yeah, that might look cool.", "points": 3 }, { "text": "Yeah, I dunno...", "points": 0 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "I have enough.", "points": 1 }, { "text": "I'm not NOT struggling...", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Yes.", "points": 1 }, { "text": "No.", "points": 3 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "Are you okay?", "points": 0 }, { "text": "You should go home.", "points": 3 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "Really?", "points": 0 }, { "text": "You probably shouldn't...", "points": 3 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "Dad?", "points": 3 }, { "text": "It's my first time hearing it.", "points": 1 }, { "text": "......", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Do you miss your family?", "points": 0 }, { "text": "Are you running away?", "points": 1 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "Why not take a break?", "points": 1 }, { "text": "Poor men know no leisure.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "Hang in there.", "points": 1 }, { "text": "Time to retire?", "points": 1 }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "That's awesome.", "points": 3 }, { "text": "It's missing something.", "points": 3 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "star",
    "arcanaNumber": "17",
    "arcanaName": "Star",
    "characterName": "Mamoru",
    "image": "/images/mamoru.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "I'm kinda jealous.", "points": 0 }, { "text": "Sounds like a lot of pressure.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "You.", "points": 1 }, { "text": "Myself.", "points": 3 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "For your teammates?", "points": 1 }, { "text": "Who's \"them\"?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "Sounds like fun.", "points": 1 }, { "text": "That sounds rough.", "points": 1 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "What are you doing?", "points": 1 }, { "text": "Slow down and savor it.", "points": 1 }] },
        { "response": 2, "options": [{ "text": "That would be amazing!", "points": 1 }, { "text": "What's the big deal?", "points": 0 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "You're late.", "points": 0 }, { "text": "Are you okay?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "But what?", "points": 0 }, { "text": "I'll come back here with you.", "points": 1 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "Well, what happened?", "points": 0 }, { "text": "Don't worry, it's okay.", "points": 3 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "Sounds pretty rough.", "points": 1 }, { "text": "Stop whining and do it!", "points": 1 }] },
        { "response": 2, "options": [{ "text": "You have to accept it.", "points": 0 }, { "text": "Don't give up yet.", "points": 3 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "Do it!", "points": 3 }, { "text": "I could spot you some cash.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "It sure was.", "points": 1 }, { "text": "Don't sweat it.", "points": 1 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "Did you win?", "points": 1 }, { "text": "Did you lose?", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Wow, really?", "points": 0 }, { "text": "Congrats, man!", "points": 1 }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "\"Take off\"?", "points": 0 }, { "text": "You're leaving today?", "points": 3 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "moon",
    "arcanaNumber": "18",
    "arcanaName": "Moon",
    "characterName": "Nozomi",
    "image": "/images/nozomi.png",
    "ranks": [
      { "rank": 1, "responses": [
        { "response": 1, "options": [{ "text": "Pheromone Coffee.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "Red.", "points": 0 }] },
        { "response": 3, "options": [{ "text": "Hagakure Bowl.", "points": 0 }] },
        { "response": 4, "options": [{ "text": "Give him an Odd Morsel.", "points": 0 }] }
      ]},
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "Sure, why not.", "points": 3 }, { "text": "Not really, no.", "points": 0 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "Nozomi Suemitsu.", "points": 0 }, { "text": "The Gourmet King.", "points": 3 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "Did you eat too much?", "points": 0 }, { "text": "Are you feeling sick?", "points": 3 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "That's right.", "points": 3 }, { "text": "Sorry, what?", "points": 0 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "Does this happen a lot?", "points": 1 }, { "text": "Did you eat too much?", "points": 0 }, { "text": "Are you sick?", "points": 3 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "Yeah, I'm freaking out.", "points": 0 }, { "text": "Not really.", "points": 1 }, { "text": "The world is ending?", "points": 3 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "You do look thinner.", "points": 0 }, { "text": "No, you're not.", "points": 3 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "You're gonna scam them, too?", "points": 0 }, { "text": "Just knock it off.", "points": 0 }] }
      ]},
      { "rank": 10, "responses": [
        { "response": 1, "options": [{ "text": "Just be yourself.", "points": 3 }, { "text": "You're irreplaceable.", "points": 3 }] }
      ]}
    ]
  },
  {
    "gameId": "p3r",
    "id": "sun",
    "arcanaNumber": "19",
    "arcanaName": "Sun",
    "characterName": "Akinari",
    "image": "/images/akinari.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [
        { "response": 1, "options": [{ "text": "What am I different?", "points": 0 }, { "text": "Really?", "points": 1 }] },
        { "response": 2, "options": [{ "text": "You have a point.", "points": 1 }, { "text": "I don't agree.", "points": 0 }, { "text": "I've never thought about that...", "points": 0 }] }
      ]},
      { "rank": 3, "responses": [
        { "response": 1, "options": [{ "text": "Maybe it's a whim of God.", "points": 0 }, { "text": "I couldn't say.", "points": 1 }, { "text": "You aren't alone.", "points": 0 }] }
      ]},
      { "rank": 4, "responses": [
        { "response": 1, "options": [{ "text": "I'd say so.", "points": 3 }, { "text": "No, I don't.", "points": 1 }, { "text": "It depends on the book.", "points": 1 }] }
      ]},
      { "rank": 5, "responses": [
        { "response": 1, "options": [{ "text": "You need to listen to your body.", "points": 3 }, { "text": "Maybe you should go rest?", "points": 0 }] }
      ]},
      { "rank": 6, "responses": [
        { "response": 1, "options": [{ "text": "Sounds fine to me.", "points": 3 }, { "text": "I dunno...", "points": 0 }] },
        { "response": 2, "options": [{ "text": "It sounds interesting.", "points": 3 }, { "text": "It needs work.", "points": 0 }] }
      ]},
      { "rank": 7, "responses": [
        { "response": 1, "options": [{ "text": "That's a good story.", "points": 0 }, { "text": "It sounds really depressing.", "points": 3 }, { "text": "I've heard that one before.", "points": 0 }] }
      ]},
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "Take as long as you need.", "points": 1 }, { "text": "You can do this.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "That's dangerous.", "points": 0 }, { "text": "Why did you stop?", "points": 1 }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "Free from what?", "points": 0 }, { "text": "You finished your story?", "points": 3 }] }
      ]},
      { "rank": 10, "responses": [{ "response": 1, "options": [] }] }
    ]
  },
  {
    "gameId": "p3r",
    "id": "judgement",
    "arcanaNumber": "20",
    "arcanaName": "Judgement",
    "characterName": "Nyx Annihilation Team",
    "image": "/images/nyx.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [{ "text": "Progride automaticamente com a historia.", "points": 0 }] }] }
    ]
  },
  {
    "gameId": "p3r",
    "id": "aeon",
    "arcanaNumber": "21",
    "arcanaName": "Aeon",
    "characterName": "Aigis",
    "image": "/images/aigis.png",
    "ranks": [
      { "rank": 1, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 2, "responses": [{ "response": 1, "options": [{ "text": "I like it here.", "points": 0 }] }] },
      { "rank": 3, "responses": [{ "response": 1, "options": [{ "text": "That's not true.", "points": 0 }] }] },
      { "rank": 4, "responses": [{ "response": 1, "options": [{ "text": "All right.", "points": 0 }] }] },
      { "rank": 5, "responses": [{ "response": 1, "options": [{ "text": "You might be right.", "points": 0 }] }] },
      { "rank": 6, "responses": [{ "response": 1, "options": [{ "text": "No, you didn't.", "points": 0 }, { "text": "He thought I was your boyfriend.", "points": 0 }] }] },
      { "rank": 7, "responses": [{ "response": 1, "options": [] }] },
      { "rank": 8, "responses": [
        { "response": 1, "options": [{ "text": "I'm doing it now.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "It's love.", "points": 0, "tag": "Romance" }, { "text": "Because we're friends.", "points": 0, "tag": "Friendship" }] }
      ]},
      { "rank": 9, "responses": [
        { "response": 1, "options": [{ "text": "You're right.", "points": 0 }] },
        { "response": 2, "options": [{ "text": "I love you too.", "points": 0, "tag": "Romance" }, { "text": "Sorry, but I can't...", "points": 0, "tag": "Friendship" }] }
      ]},
      { "rank": 10, "responses": [{ "response": 1, "options": [] }] }
    ]
  }
]);

db.createCollection('exams');
db.exams.createIndex({ gameId: 1 });
db.exams.insertMany([
  {
    "gameId": "p3r",
    "exams": [
      {
        "period": "April Classroom",
        "questions": [
          { "date": "4/8", "question": "What phrase symbolizes summer?", "answer": "Vivid carp streamers." },
          { "date": "4/18", "question": "The places where people dumped their waste in the Jomon period—what are they called nowadays?", "answer": "Middens" },
          { "date": "4/27", "question": "Do you know which one's not an algebraic spiral or whatever?", "answer": "A." }
        ]
      },
      {
        "period": "May Classroom",
        "questions": [
          { "date": "5/6", "question": "What do you call the device that helps generate electric power for trains?", "answer": "A pantograph" },
          { "date": "5/13", "question": "Which tool did he use in his experiments?", "answer": "The pendulum." },
          { "date": "5/15", "question": "What's the other name for 'May sickness'—the more casual one?", "answer": "May Blues" }
        ]
      },
      {
        "period": "May Midterm Exam",
        "questions": [
          { "date": "5/19", "question": "What is the other common expression used to describe 'May sickness'?", "answer": "May Blues" },
          { "date": "5/20", "question": "Which of the following did Léon Foucault use in his experiment on the rotation of the Earth?", "answer": "A pendulum" },
          { "date": "5/21", "question": "Which of the following is generated by a pantograph?", "answer": "Electricity" },
          { "date": "5/22", "question": "During which historical period were middens most commonly used?", "answer": "Jomon" }
        ]
      },
      {
        "period": "June Classroom",
        "questions": [
          { "date": "6/15", "question": "Which phrase means, 'able to see things for what they really are'?", "answer": "Keen eye." },
          { "date": "6/17", "question": "What formed the origins of magic?", "answer": "Shamanism." },
          { "date": "6/22", "question": "What else do people call this curve?", "answer": "Witch of Agnesi." },
          { "date": "6/25", "question": "What's it called when the air bubbles in a whirlpool bath hit you and make your body vibrate?", "answer": "The flutter effect." },
          { "date": "6/29", "question": "What form of natural magic is used to find water sources?", "answer": "Dowsing." }
        ]
      },
      {
        "period": "July Classroom",
        "questions": [
          { "date": "7/3", "question": "Thou shalt not recite such a tale of this world before the princess... what kinda tale was he talkin' about?", "answer": "About romance." },
          { "date": "7/8", "question": "Find the comma splice in the provided sentence.", "answer": "Between 'time' and 'it's.'" },
          { "date": "7/9", "question": "At the same time, a serious problem arose for the farmers. Do you remember what that was?", "answer": "Social disparity." },
          { "date": "7/10", "question": "What is the esoteric study of Jewish texts called?", "answer": "Kabbalah." },
          { "date": "7/11", "question": "Now, what do you that item was? It's something every samurai needs!", "answer": "The katana." }
        ]
      },
      {
        "period": "July Finals Exam",
        "questions": [
          { "date": "7/14", "question": "What form of natural magic was used to find water sources?", "answer": "Dowsing" },
          { "date": "7/15", "question": "How did the Witch of Agnesi gain the first half of its name?", "answer": "An error in translation" },
          { "date": "7/16", "question": "Who designed the prototype of the katana?", "answer": "Taira No Masakado" },
          { "date": "7/17", "question": "There is an error in this sentence, what kind is it?", "answer": "Comma splice" }
        ]
      },
      {
        "period": "September Classroom",
        "questions": [
          { "date": "9/1", "question": "Which property of electricity is relevant to superconductivity?", "answer": "Resistance" },
          { "date": "9/10", "question": "H-Hey, do you know what it means to 'spill the beans'?", "answer": "To reveal a secret." },
          { "date": "9/11", "question": "Which book helped further the art of magic during the Renaissance?", "answer": "The Hermetica." },
          { "date": "9/14", "question": "Who is one referring to when speaking of their 'better half'?", "answer": "Their soulmate." },
          { "date": "9/26", "question": "What is the collective name for the four holy numbers in numerology?", "answer": "Tetractys." }
        ]
      },
      {
        "period": "October Classroom",
        "questions": [
          { "date": "10/7", "question": "Which hormone is the one in your brain that provides a sense of achievement?", "answer": "Dopamine." },
          { "date": "10/10", "question": "Who was the founder of Theosophy, a group that gave rise to many other magical groups?", "answer": "Helena Blavatsky." },
          { "date": "10/19", "question": "We used the number 'zero' a lot. Do you know where it originally came from?", "answer": "India." },
          { "date": "10/22", "question": "Which Roman goddess has been theorized as the namesake for the month of April?", "answer": "Venus." },
          { "date": "10/26", "question": "Which region calls it 'the month with gods' because that's where they all go?", "answer": "Izumo." },
          { "date": "10/30", "question": "A certain enzyme brings out the sweetness in baked potatoes. What is it?", "answer": "Beta amylase." }
        ]
      },
      {
        "period": "October Midterm Exam",
        "questions": [
          { "date": "10/13", "question": "The hormone dopamine is related to our sense of accomplishment. Name a symptom of its over-production.", "answer": "Addiction" },
          { "date": "10/14", "question": "Who is considered the first numerologist, whose name lives on in a mathematical theorem?", "answer": "Pythagoras" },
          { "date": "10/15", "question": "What happens when electrical resistance reaches zero?", "answer": "Superconductivity" },
          { "date": "10/16", "question": "What is the meaning of the phrase 'to spill the beans'?", "answer": "To reveal a secret" }
        ]
      },
      {
        "period": "November Classroom",
        "questions": [
          { "date": "11/7", "question": "What is the ancient Indian magical text I mentioned today?", "answer": "The Upanishads." },
          { "date": "11/12", "question": "What was she describing with such a sparse line?", "answer": "Her favorite time in winter." },
          { "date": "11/30", "question": "In the poem that Genji sends to her, what did he compare her to?", "answer": "The cherry blossom." }
        ]
      },
      {
        "period": "December Classroom",
        "questions": [
          { "date": "12/7", "question": "What's the name of the stratospheric layer of molecules comprised of three oxygen atoms?", "answer": "The ozone layer." },
          { "date": "12/9", "question": "What sorcery was Himiko said to have used?", "answer": "Kido." },
          { "date": "12/11", "question": "Which of the following is an irregular plural noun?", "answer": "Lives." }
        ]
      },
      {
        "period": "December Finals Exam",
        "questions": [
          { "date": "12/14", "question": "Which of the following originated in India?", "answer": "The number zero" },
          { "date": "12/15", "question": "What disaccharide is produced when beta-amylase reacts with starch in sweet potatoes?", "answer": "Maltose" },
          { "date": "12/16", "question": "Which Roman goddess has been theorized as the namesake for the month of April?", "answer": "Venus" },
          { "date": "12/17", "question": "In The Tale of Genji, who does Hikari Genji compare to cherry blossoms?", "answer": "Murasaki-no-Ue" },
          { "date": "12/18", "question": "Which of the following words is not in the correct plural form?", "answer": "Geeses" }
        ]
      },
      {
        "period": "January Classroom",
        "questions": [
          { "date": "1/8", "question": "Where is this 'certain place' the new year index journey is referring to?", "answer": "The underworld." },
          { "date": "1/18", "question": "I've mentioned two Greek sorceresses. One was Medea. Who was the other?", "answer": "Circe." }
        ]
      }
    ]
  }
])

db.createCollection('demons');
db.demons.createIndex({ gameId: 1 });

db.demons.insertMany([
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 72,
    "name": "Final Checkmate",
    "hp": 5472,
    "mp": 500,
    "image": "https://megatenwiki.com/images/9/92/P3R_Final_Checkmate_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Platinum Medal",
    "appears": "Adamah I 227-261"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 70,
    "name": "Glorious Hand",
    "hp": 342,
    "mp": 200,
    "image": "https://megatenwiki.com/images/9/92/P3R_Glorious_Hand_Model.png",
    "resistances": {
      "slash": "rp",
      "strike": "rp",
      "pierce": "rp",
      "fire": "rp",
      "ice": "rp",
      "elec": "rp",
      "wind": "rp",
      "light": "rp",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Melancholic Coin",
    "appears": "Adamah I 227-261"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 65,
    "name": "Dutiful Checkmate",
    "hp": 5265,
    "mp": 400,
    "image": "https://megatenwiki.com/images/9/92/P3R_Dutiful_Checkmate_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Gold Medal",
    "appears": "Harabah II 199-224"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 64,
    "name": "Miracle Hand",
    "hp": 380,
    "mp": 150,
    "image": "https://megatenwiki.com/images/9/92/P3R_Miracle_Hand_Model.png",
    "resistances": {
      "slash": "ab",
      "strike": "ab",
      "pierce": "ab",
      "fire": "ab",
      "ice": "ab",
      "elec": "ab",
      "wind": "ab",
      "light": "ab",
      "dark": "ab",
      "almighty": "no"
    },
    "drops": "Scintillating Coin",
    "appears": "Harabah II 199-224"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 59,
    "name": "Principled Checkmate",
    "hp": 9072,
    "mp": 320,
    "image": "https://megatenwiki.com/images/9/92/P3R_Principled_Checkmate_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Gold Medal",
    "appears": "Harabah I 173-197"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 58,
    "name": "Luxury Hand",
    "hp": 290,
    "mp": 130,
    "image": "https://megatenwiki.com/images/9/92/P3R_Luxury_Hand_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "nu",
      "ice": "nu",
      "elec": "nu",
      "wind": "nu",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Scintillating Coin",
    "appears": "Harabah I 173-197"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 51,
    "name": "Reticent Checkmate",
    "hp": 5264,
    "mp": 240,
    "image": "https://megatenwiki.com/images/9/92/P3R_Reticent_Checkmate_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Silver Medal",
    "appears": "Tziah II 145-168"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 49,
    "name": "Ethereal Hand",
    "hp": 620,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Ethereal_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Sumptuous Coin",
    "appears": "Tziah II 145-168"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 43,
    "name": "Bold Checkmate",
    "hp": 6360,
    "mp": 177,
    "image": "https://megatenwiki.com/images/9/92/P3R_Bold_Checkmate_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Silver Medal",
    "appears": "Tziah I 119-142"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 42,
    "name": "Opulent Hand",
    "hp": 700,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Opulent_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Sumptuous Coin",
    "appears": "Tziah I 119-142"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 35,
    "name": "Invaluable Hand",
    "hp": 600,
    "mp": 80,
    "image": "https://megatenwiki.com/images/9/92/P3R_Invaluable_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Rustic Coin",
    "appears": "Yabbashah II 93-117"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 27,
    "name": "Supreme Hand",
    "hp": 500,
    "mp": 70,
    "image": "https://megatenwiki.com/images/9/92/P3R_Supreme_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "nu",
      "elec": "nu",
      "wind": "nu",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Rustic Coin",
    "appears": "Yabbashah I 70-89"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 19,
    "name": "Precious Hand",
    "hp": 420,
    "mp": 60,
    "image": "https://megatenwiki.com/images/9/92/P3R_Precious_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Odd Coin",
    "appears": "Arqa II 44-68"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 12,
    "name": "Treasure Hand",
    "hp": 336,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Treasure_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Odd Coin",
    "appears": "Arqa I 23-41"
  },
  {
    "gameId": "p3r",
    "race": "Fool",
    "level": 7,
    "name": "Wealth Hand",
    "hp": 250,
    "mp": 30,
    "image": "https://megatenwiki.com/images/9/92/P3R_Wealth_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Worldly Coin",
    "appears": "Thebel 12-21"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 73,
    "name": "Grand Magus",
    "hp": 909,
    "mp": 320,
    "image": "https://megatenwiki.com/images/9/92/P3R_Grand_Magus_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "nu",
      "pierce": "no",
      "fire": "wk",
      "ice": "rp",
      "elec": "no",
      "wind": "no",
      "light": "rp",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Cap of Eminence, Diamond, Ruby",
    "appears": "Adamah II 257-261"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 63,
    "name": "Prime Magus",
    "hp": 570,
    "mp": 200,
    "image": "https://megatenwiki.com/images/9/92/P3R_Prime_Magus_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "ab",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Cap of Knowledge, Garnet, Diamond",
    "appears": "Harabah II 219-224"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 59,
    "name": "Angry Table",
    "hp": 500,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Angry_Table_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Silver Cutlery, Onyx, Emerald",
    "appears": "Harabah II 200-223"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 48,
    "name": "Wondrous Magus",
    "hp": 482,
    "mp": 160,
    "image": "https://megatenwiki.com/images/9/92/P3R_Wondrous_Magus_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "rp",
      "elec": "no",
      "wind": "no",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Cap of Admiration, Onyx",
    "appears": "Tziah II 159-168"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 42,
    "name": "Magical Magus",
    "hp": 472,
    "mp": 150,
    "image": "https://megatenwiki.com/images/9/92/P3R_Magical_Magus_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "nu",
      "wind": "no",
      "light": "no",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Cap of Wizardry, Topaz, Emerald",
    "appears": "Tziah I 137-142"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 36,
    "name": "Almighty Hand",
    "hp": 364,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Almighty_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Divine Adornment, Amethyst",
    "appears": "Yabbashah II 103-117"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 22,
    "name": "Killing Hand",
    "hp": 251,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Killing_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "no",
      "wind": "wk",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Assailant's Choker, Amethyst",
    "appears": "Arqa II 63-68"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 18,
    "name": "Crying Table",
    "hp": 253,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Crying_Table_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Bronze Cutlery, Malachite, Turquoise",
    "appears": "Arqa II 52-68"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 13,
    "name": "Dancing Hand",
    "hp": 237,
    "mp": 30,
    "image": "https://megatenwiki.com/images/9/92/P3R_Dancing_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "nu",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Dancer's Necklace, Turquoise",
    "appears": "Arqa I 37-41"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 9,
    "name": "Dancing Hand B",
    "hp": 100,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Dancing_Hand_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "nu",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Monorail"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 9,
    "name": "Laughing Table",
    "hp": 162,
    "mp": 25,
    "image": "https://megatenwiki.com/images/9/92/P3R_Laughing_Table_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "rs",
      "fire": "no",
      "ice": "rs",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Iron Cutlery, Malachite",
    "appears": "Arqa I 24-34"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 9,
    "name": "Laughing Table B",
    "hp": 100,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Laughing_Table_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "rs",
      "fire": "wk",
      "ice": "nu",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Monorail"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 5,
    "name": "Magic Hand B",
    "hp": 140,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Magic_Hand_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "rs",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tutorial"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 4,
    "name": "Cowardly Maya D",
    "hp": 100,
    "mp": 300,
    "image": "https://megatenwiki.com/images/9/92/P3R_Cowardly_Maya_D_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tutorial"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 4,
    "name": "Magic Hand",
    "hp": 97,
    "mp": 25,
    "image": "https://megatenwiki.com/images/9/92/P3R_Magic_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "rs",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Hellish Bowtie, Turquoise",
    "appears": "Thebel 7-21"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 2,
    "name": "Cowardly Maya",
    "hp": 83,
    "mp": 20,
    "image": "https://megatenwiki.com/images/9/92/P3R_Cowardly_Maya_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Mask of Cowardice, Malachite",
    "appears": "Thebel 2-19"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 2,
    "name": "Cowardly Maya B",
    "hp": 37,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Cowardly_Maya_B_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tutorial"
  },
  {
    "gameId": "p3r",
    "race": "Magician",
    "level": 2,
    "name": "Cowardly Maya C",
    "hp": 80,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Cowardly_Maya_C_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tutorial"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 70,
    "name": "Gold Hand",
    "hp": 3500,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Gold_Hand_Model.png",
    "resistances": {
      "slash": "rp",
      "strike": "rp",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "AS Refined Material",
    "appears": "Harabah II P2"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 69,
    "name": "Black Hand",
    "hp": 2140,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Black_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "ab",
      "elec": "ab",
      "wind": "wk",
      "light": "no",
      "dark": "ab",
      "almighty": "no"
    },
    "drops": "Assailant's Choker",
    "appears": "Harabah II P2"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 69,
    "name": "Pink Hand",
    "hp": 1800,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Pink_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "wk",
      "elec": "ab",
      "wind": "ab",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Dancer's Necklace",
    "appears": "Harabah II P2"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 69,
    "name": "Silver Hand",
    "hp": 1980,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Silver_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "nu",
      "pierce": "no",
      "fire": "ab",
      "ice": "ab",
      "elec": "wk",
      "wind": "ab",
      "light": "ab",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Divine Adornment",
    "appears": "Harabah II P2"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 69,
    "name": "White Hand",
    "hp": 1470,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_White_Hand_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "ab",
      "elec": "ab",
      "wind": "ab",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Hellish Bowtie",
    "appears": "Harabah II P2"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 68,
    "name": "Foot Soldier",
    "hp": 740,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Foot_Soldier_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "rs",
      "pierce": "rp",
      "fire": "wk",
      "ice": "nu",
      "elec": "no",
      "wind": "rs",
      "light": "ab",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Adamah I 236"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 45,
    "name": "Grand Magus B",
    "hp": 1612,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Grand_Magus_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "rs",
      "ice": "nu",
      "elec": "no",
      "wind": "rs",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Cap of Eminence",
    "appears": "Tziah I D3"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 43,
    "name": "Terminal Table",
    "hp": 1638,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Terminal_Table_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "nu",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "ab",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Emerald",
    "appears": "Tziah I 132"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 42,
    "name": "Purging Right Hand",
    "hp": 1550,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Purging_Right_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "ab",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tziah I 136"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 42,
    "name": "Subservient Left Hand",
    "hp": 1550,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Subservient_Left_Hand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "ab",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "rp",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tziah I 136"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 35,
    "name": "Venomous Magus",
    "hp": 1390,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Venomous_Magus_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "no",
      "elec": "wk",
      "wind": "nu",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Yabbashah II 99"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 34,
    "name": "Magical Magus C",
    "hp": 420,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Magical_Magus_C_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "rs",
      "elec": "rs",
      "wind": "rs",
      "light": "rs",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "Cap of Wizardry",
    "appears": "Yabbashah I P2"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 33,
    "name": "Cowardly Maya E",
    "hp": 1685,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Cowardly_Maya_E_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Mask of Cowardice",
    "appears": "Yabbashah I P1"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 33,
    "name": "Five Fingers of Blight",
    "hp": 900,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Five_Fingers_of_Blight_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Black Quartz",
    "appears": "Yabbashah II 99"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 14,
    "name": "Heretic Magus",
    "hp": 640,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Heretic_Magus_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Malachite",
    "appears": "Arqa I 35"
  },
  {
    "gameId": "p3r",
    "race": "Magician P",
    "level": 13,
    "name": "Grievous Table",
    "hp": 320,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Grievous_Table_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Arqa I 35"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 73,
    "name": "Vehement Idol",
    "hp": 957,
    "mp": 190,
    "image": "https://megatenwiki.com/images/9/92/P3R_Vehement_Idol_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "rp",
      "ice": "wk",
      "elec": "no",
      "wind": "nu",
      "light": "no",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Throne of Mania, Diamond, Ruby",
    "appears": "Adamah II 260-261"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 61,
    "name": "Wrathful Book",
    "hp": 650,
    "mp": 125,
    "image": "https://megatenwiki.com/images/9/92/P3R_Wrathful_Book_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "rp",
      "elec": "no",
      "wind": "no",
      "light": "ab",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Book of Indignation, Amethyst, Onyx",
    "appears": "Harabah II 206-223"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 54,
    "name": "Ruinous Idol B",
    "hp": 1339,
    "mp": 160,
    "image": "https://megatenwiki.com/images/9/92/P3R_Ruinous_Idol_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "ab",
      "wind": "wk",
      "light": "no",
      "dark": "ab",
      "almighty": "no"
    },
    "drops": "Throne of Ruin, Silver Quartz, Garnet",
    "appears": "Tziah II 156-168"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 53,
    "name": "Ruinous Idol",
    "hp": 700,
    "mp": 160,
    "image": "https://megatenwiki.com/images/9/92/P3R_Ruinous_Idol_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "ab",
      "wind": "wk",
      "light": "no",
      "dark": "ab",
      "almighty": "no"
    },
    "drops": "Throne of Ruin, Topaz",
    "appears": "Harabah I 185-197"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 44,
    "name": "Liberating Idol",
    "hp": 469,
    "mp": 140,
    "image": "https://megatenwiki.com/images/9/92/P3R_Liberating_Idol_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "rp",
      "elec": "wk",
      "wind": "nu",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Throne of Freedom, Emerald",
    "appears": "Tziah II 147-168"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 40,
    "name": "Writhing Tiara",
    "hp": 458,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Writhing_Tiara_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "rp",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Silencing Tiara, Turquoise, Topaz",
    "appears": "Tziah I 128-142"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 39,
    "name": "Tranquil Idol",
    "hp": 452,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Tranquil_Idol_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "nu",
      "ice": "no",
      "elec": "rs",
      "wind": "wk",
      "light": "rs",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Throne of Serenity, Onyx, Topaz",
    "appears": "Tziah I 123-142"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 35,
    "name": "Shouting Tiara",
    "hp": 342,
    "mp": 80,
    "image": "https://megatenwiki.com/images/9/92/P3R_Shouting_Tiara_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "ab",
      "wind": "no",
      "light": "nu",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Shrieking Tiara, Turquoise",
    "appears": "Yabbashah II 102-117"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 27,
    "name": "Silent Book",
    "hp": 284,
    "mp": 60,
    "image": "https://megatenwiki.com/images/9/92/P3R_Silent_Book_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "nu",
      "wind": "wk",
      "light": "no",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "Book of Secrets, Turquoise",
    "appears": "Yabbashah I 80-89"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 18,
    "name": "Maniacal Book",
    "hp": 243,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Maniacal_Book_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "rs",
      "elec": "no",
      "wind": "no",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Book of Fanaticism, Malachite, Turquoise",
    "appears": "Arqa II 50-68"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 12,
    "name": "Spurious Book",
    "hp": 160,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Spurious_Book_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Book of Fabrication, Turquoise",
    "appears": "Arqa I 29-41"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 10,
    "name": "Grieving Tiara",
    "hp": 176,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Grieving_Tiara_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "nu",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Lamenting Tiara, Malachite, Turquoise",
    "appears": "Arqa I 24-41"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 9,
    "name": "Spurious Book B",
    "hp": 100,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Spurious_Book_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Monorail"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 4,
    "name": "Muttering Tiara C",
    "hp": 100,
    "mp": 300,
    "image": "https://megatenwiki.com/images/9/92/P3R_Muttering_Tiara_C_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tutorial"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 3,
    "name": "Muttering Tiara",
    "hp": 88,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Muttering_Tiara_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Hushing Tiara, Malachite",
    "appears": "Thebel 2-21"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 2,
    "name": "Merciless Maya",
    "hp": 83,
    "mp": 15,
    "image": "https://megatenwiki.com/images/9/92/P3R_Merciless_Maya_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Mask of Cruelty, Turquoise",
    "appears": "Thebel 3-9"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 2,
    "name": "Merciless Maya B",
    "hp": 70,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Merciless_Maya_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Mask of Cruelty",
    "appears": "Tutorial"
  },
  {
    "gameId": "p3r",
    "race": "Priestess",
    "level": 2,
    "name": "Muttering Tiara B",
    "hp": 72,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Muttering_Tiara_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tutorial"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 70,
    "name": "Morbid Book",
    "hp": 2700,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Morbid_Book_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "rp",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Harabah II P1"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 68,
    "name": "Mage Soldier",
    "hp": 630,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Mage_Soldier_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "rp",
      "ice": "no",
      "elec": "nu",
      "wind": "no",
      "light": "no",
      "dark": "ab",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Adamah I 236"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 66,
    "name": "Vehement Idol C",
    "hp": 1999,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Vehement_Idol_C_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "rp",
      "fire": "rp",
      "ice": "wk",
      "elec": "no",
      "wind": "nu",
      "light": "no",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Throne of Mania",
    "appears": "Harabah II D2"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 64,
    "name": "Haughty Belle",
    "hp": 1736,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Haughty_Belle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "nu",
      "wind": "no",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Saint's Stool",
    "appears": "Unknown"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 48,
    "name": "Vehement Idol B",
    "hp": 2215,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Vehement_Idol_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "rs",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Throne of Mania",
    "appears": "Tziah I P3"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 47,
    "name": "Tome of Persecution",
    "hp": 1225,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Tome_of_Persecution_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "ab",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tziah II 151"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 39,
    "name": "Muttering Tiara D",
    "hp": 620,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Muttering_Tiara_D_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "nu",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Hushing Tiara",
    "appears": "Yabbashah II P1"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 39,
    "name": "Muttering Tiara E",
    "hp": 620,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Muttering_Tiara_E_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "nu",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Hushing Tiara",
    "appears": "Yabbashah II P3"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 39,
    "name": "Silent Book B",
    "hp": 620,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Silent_Book_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Book of Secrets",
    "appears": "Yabbashah II P2"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 39,
    "name": "Silent Book C",
    "hp": 620,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Silent_Book_C_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Book of Secrets",
    "appears": "Yabbashah II P3"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 37,
    "name": "Bloody Maria",
    "hp": 1530,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Bloody_Maria_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "nu",
      "ice": "nu",
      "elec": "nu",
      "wind": "nu",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "AS Generic Material",
    "appears": "Yabbashah II 105"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 36,
    "name": "Executioner's Crown",
    "hp": 1045,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Executioner%27s_Crown_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "ab",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Yabbashah II 105"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 33,
    "name": "Shouting Tiara B",
    "hp": 957,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Shouting_Tiara_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "nu",
      "ice": "no",
      "elec": "rs",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Shrieking Tiara",
    "appears": "Yabbashah I P2"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 31,
    "name": "Tome of Atrophy",
    "hp": 696,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Tome_of_Atrophy_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "nu",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Yabbashah I 90"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 25,
    "name": "Magical Magus B",
    "hp": 1080,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Magical_Magus_B_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Cap of Wizardry",
    "appears": "Unknown"
  },
  {
    "gameId": "p3r",
    "race": "Priestess P",
    "level": 20,
    "name": "Tranquil Idol B",
    "hp": 715,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Tranquil_Idol_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Throne of Serenity",
    "appears": "Unknown"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 72,
    "name": "Divine Mother B",
    "hp": 2251,
    "mp": 500,
    "image": "https://megatenwiki.com/images/9/92/P3R_Divine_Mother_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "nu",
      "wind": "no",
      "light": "rp",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Saint's Stool, Gold Quartz, Ruby",
    "appears": "Adamah I 227-244"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 68,
    "name": "Eternal Eagle",
    "hp": 711,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Eternal_Eagle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "no",
      "ice": "wk",
      "elec": "ab",
      "wind": "ab",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Immortal Plume, Garnet, Ruby",
    "appears": "Adamah I 242-244"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 60,
    "name": "Pistil Mother",
    "hp": 700,
    "mp": 200,
    "image": "https://megatenwiki.com/images/9/92/P3R_Pistil_Mother_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "wk",
      "elec": "no",
      "wind": "rp",
      "light": "rp",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Leopardess Stool, Emerald, Amethyst",
    "appears": "Harabah II 204-224"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 47,
    "name": "Regal Mother",
    "hp": 468,
    "mp": 180,
    "image": "https://megatenwiki.com/images/9/92/P3R_Regal_Mother_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "rs",
      "elec": "wk",
      "wind": "ab",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Opulent Stool, Turquoise, Emerald",
    "appears": "Tziah II 157-168"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 43,
    "name": "Growth Relic",
    "hp": 448,
    "mp": 90,
    "image": "https://megatenwiki.com/images/9/92/P3R_Growth_Relic_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "ab",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Orb of Growth, Amethyst",
    "appears": "Tziah II 146-168"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 41,
    "name": "Elegant Mother",
    "hp": 469,
    "mp": 140,
    "image": "https://megatenwiki.com/images/9/92/P3R_Elegant_Mother_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "rs",
      "elec": "no",
      "wind": "nu",
      "light": "wk",
      "dark": "ab",
      "almighty": "no"
    },
    "drops": "Lady's Stool, Topaz",
    "appears": "Tziah I 133-142"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 40,
    "name": "Elegant Mother B",
    "hp": 1670,
    "mp": 280,
    "image": "https://megatenwiki.com/images/9/92/P3R_Elegant_Mother_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "rs",
      "elec": "wk",
      "wind": "nu",
      "light": "no",
      "dark": "ab",
      "almighty": "no"
    },
    "drops": "Lady's Stool, Black Quartz, Topaz",
    "appears": "Yabbashah II 106-117"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 38,
    "name": "Constancy Relic",
    "hp": 425,
    "mp": 70,
    "image": "https://megatenwiki.com/images/9/92/P3R_Constancy_Relic_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "wk",
      "elec": "no",
      "wind": "nu",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Orb of Continuity, Malachite, Onyx",
    "appears": "Tziah I 121-142"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 28,
    "name": "Jupiter Eagle",
    "hp": 277,
    "mp": 70,
    "image": "https://megatenwiki.com/images/9/92/P3R_Jupiter_Eagle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "no",
      "ice": "rs",
      "elec": "no",
      "wind": "ab",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Airy Plume, Onyx",
    "appears": "Yabbashah I 83-89"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 23,
    "name": "Creation Relic",
    "hp": 264,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Creation_Relic_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "wk",
      "fire": "no",
      "ice": "rs",
      "elec": "rs",
      "wind": "nu",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Orb of Creation, Turquoise",
    "appears": "Yabbashah I 70-89"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 20,
    "name": "Dark Eagle",
    "hp": 254,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Dark_Eagle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "wk",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Jet-Black Plume, Malachite",
    "appears": "Arqa II 55-68"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 14,
    "name": "Venus Eagle",
    "hp": 229,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Venus_Eagle_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "no",
      "pierce": "wk",
      "fire": "no",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ostentatious Plume, Amethyst",
    "appears": "Arqa I 39-41"
  },
  {
    "gameId": "p3r",
    "race": "Empress",
    "level": 9,
    "name": "Frivolous Maya",
    "hp": 142,
    "mp": 15,
    "image": "https://megatenwiki.com/images/9/92/P3R_Frivolous_Maya_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "wk",
      "elec": "no",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Mask of Vanity, Amethyst",
    "appears": "Arqa I 23-37"
  },
  {
    "gameId": "p3r",
    "race": "Empress P",
    "level": 55,
    "name": "Change Relic B",
    "hp": 1690,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Change_Relic_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Orb of Flux",
    "appears": "Tziah II P3"
  },
  {
    "gameId": "p3r",
    "race": "Empress P",
    "level": 42,
    "name": "Heartless Relic",
    "hp": 1105,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Heartless_Relic_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "rs",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tziah I 125"
  },
  {
    "gameId": "p3r",
    "race": "Empress P",
    "level": 40,
    "name": "Regal Mother B",
    "hp": 766,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Regal_Mother_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "no",
      "elec": "wk",
      "wind": "nu",
      "light": "wk",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Unknown"
  },
  {
    "gameId": "p3r",
    "race": "Empress P",
    "level": 37,
    "name": "Eternal Eagle B",
    "hp": 1198,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Eternal_Eagle_B_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "nu",
      "pierce": "wk",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Immortal Plume",
    "appears": "Yabbashah II D2"
  },
  {
    "gameId": "p3r",
    "race": "Empress P",
    "level": 28,
    "name": "Elegant Mother C",
    "hp": 1130,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Elegant_Mother_C_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "rs",
      "light": "no",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Lady's Stool",
    "appears": "Yabbashah I D1"
  },
  {
    "gameId": "p3r",
    "race": "Empress P",
    "level": 20,
    "name": "Lascivious Lady",
    "hp": 950,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Lascivious_Lady_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "nu",
      "elec": "nu",
      "wind": "nu",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Arqa II 54"
  },
  {
    "gameId": "p3r",
    "race": "Empress P",
    "level": 17,
    "name": "Clairvoyant Relic",
    "hp": 1090,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Clairvoyant_Relic_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Amethyst",
    "appears": "Arqa I 42"
  },
  {
    "gameId": "p3r",
    "race": "Empress P",
    "level": 11,
    "name": "Lightning Eagle",
    "hp": 384,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Lightning_Eagle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "no",
      "ice": "rs",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Arqa I 28"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 68,
    "name": "Death Castle",
    "hp": 1136,
    "mp": 180,
    "image": "https://megatenwiki.com/images/9/92/P3R_Death_Castle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "nu",
      "pierce": "no",
      "fire": "nu",
      "ice": "no",
      "elec": "ab",
      "wind": "wk",
      "light": "no",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Red Wall Fragment, Diamond",
    "appears": "Adamah I 242-251"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 68,
    "name": "Emperor Beetle",
    "hp": 444,
    "mp": 240,
    "image": "https://megatenwiki.com/images/9/92/P3R_Emperor_Beetle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "nu",
      "fire": "no",
      "ice": "nu",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Emperor's Horn, Ruby",
    "appears": "Adamah I 239-244"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 58,
    "name": "Power Castle",
    "hp": 880,
    "mp": 150,
    "image": "https://megatenwiki.com/images/9/92/P3R_Power_Castle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "wk",
      "elec": "no",
      "wind": "rp",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Green Wall Fragment, Garnet",
    "appears": "Harabah I 194-197"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 57,
    "name": "Hell Knight",
    "hp": 630,
    "mp": 150,
    "image": "https://megatenwiki.com/images/9/92/P3R_Hell_Knight_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "no",
      "pierce": "nu",
      "fire": "no",
      "ice": "no",
      "elec": "rp",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Saddle of Vengeance, Garnet, Opal",
    "appears": "Harabah I 191-197"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 47,
    "name": "Solid Castle",
    "hp": 506,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Solid_Castle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "nu",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ashen Wall Fragment, Topaz",
    "appears": "Tziah II 156-168"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 39,
    "name": "Champion Knight",
    "hp": 436,
    "mp": 80,
    "image": "https://megatenwiki.com/images/9/92/P3R_Champion_Knight_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "ab",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Saddle of Merit, Topaz",
    "appears": "Tziah I 127-141"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 36,
    "name": "Champion Knight B",
    "hp": 1500,
    "mp": 220,
    "image": "https://megatenwiki.com/images/9/92/P3R_Champion_Knight_B_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "ab",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Saddle of Merit, Black Quartz",
    "appears": "Yabbashah II 93-104"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 29,
    "name": "Avenger Knight",
    "hp": 323,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Avenger_Knight_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "nu",
      "fire": "wk",
      "ice": "nu",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Saddle of Aggression, Onyx",
    "appears": "Yabbashah I 85-89"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 25,
    "name": "Golden Beetle",
    "hp": 321,
    "mp": 45,
    "image": "https://megatenwiki.com/images/9/92/P3R_Golden_Beetle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "rs",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "no",
      "wind": "no",
      "light": "rp",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Champion's Horn, Turquoise, Malachite",
    "appears": "Yabbashah I 74-89"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 21,
    "name": "Adamant Beetle",
    "hp": 302,
    "mp": 20,
    "image": "https://megatenwiki.com/images/9/92/P3R_Adamant_Beetle_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "no",
      "pierce": "nu",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Shogun's Horn, Amethyst",
    "appears": "Arqa II 57-65"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 20,
    "name": "Ancient Castle",
    "hp": 250,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Ancient_Castle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tutorial"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 16,
    "name": "Haughty Maya",
    "hp": 199,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Haughty_Maya_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "rs",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Mask of Pride, Malachite",
    "appears": "Arqa II 44-67"
  },
  {
    "gameId": "p3r",
    "race": "Emperor",
    "level": 7,
    "name": "Grave Beetle",
    "hp": 282,
    "mp": 15,
    "image": "https://megatenwiki.com/images/9/92/P3R_Grave_Beetle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "rs",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Vanguard's Horn, Amethyst",
    "appears": "Thebel 14-21"
  },
  {
    "gameId": "p3r",
    "race": "Emperor P",
    "level": 77,
    "name": "Intrepid Knight C",
    "hp": 2311,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Intrepid_Knight_C_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "nu",
      "fire": "no",
      "ice": "rp",
      "elec": "no",
      "wind": "no",
      "light": "rp",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Saddle of Fortitude",
    "appears": "Adamah I D3"
  },
  {
    "gameId": "p3r",
    "race": "Emperor P",
    "level": 70,
    "name": "Comeback Castle",
    "hp": 2400,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Comeback_Castle_Model.png",
    "resistances": {
      "slash": "rp",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "rs",
      "elec": "rs",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Nihil Black Model",
    "appears": "Adamah I 236"
  },
  {
    "gameId": "p3r",
    "race": "Emperor P",
    "level": 55,
    "name": "Haunted Castle",
    "hp": 9999,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Haunted_Castle_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "no",
      "fire": "rs",
      "ice": "no",
      "elec": "no",
      "wind": "rs",
      "light": "wk",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Ashen Wall Fragment",
    "appears": "Tziah II P2"
  },
  {
    "gameId": "p3r",
    "race": "Emperor P",
    "level": 55,
    "name": "Intrepid Knight B",
    "hp": 1930,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Intrepid_Knight_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "nu",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Ergotite Chunk",
    "appears": "Tziah II P3"
  },
  {
    "gameId": "p3r",
    "race": "Emperor P",
    "level": 55,
    "name": "Spiritual Castle",
    "hp": 9999,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Spiritual_Castle_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "no",
      "fire": "no",
      "ice": "rs",
      "elec": "rs",
      "wind": "no",
      "light": "nu",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "White Wall Fragment",
    "appears": "Tziah II P2"
  },
  {
    "gameId": "p3r",
    "race": "Emperor P",
    "level": 52,
    "name": "Death Castle B",
    "hp": 1858,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Death_Castle_B_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "no",
      "pierce": "nu",
      "fire": "no",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Red Wall Fragment",
    "appears": "Tziah II D3"
  },
  {
    "gameId": "p3r",
    "race": "Emperor P",
    "level": 52,
    "name": "Demented Knight",
    "hp": 1835,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Demented_Knight_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "nu",
      "fire": "nu",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Silver Quartz",
    "appears": "Tziah II 161"
  },
  {
    "gameId": "p3r",
    "race": "Emperor P",
    "level": 51,
    "name": "Emperor Beetle B",
    "hp": 1595,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Emperor_Beetle_B_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "nu",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Emperor's Horn",
    "appears": "Tziah II D2"
  },
  {
    "gameId": "p3r",
    "race": "Emperor P",
    "level": 47,
    "name": "Isolated Castle",
    "hp": 1995,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Isolated_Castle_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "nu",
      "elec": "nu",
      "wind": "nu",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Pentagram Stone",
    "appears": "Tziah I 143"
  },
  {
    "gameId": "p3r",
    "race": "Emperor P",
    "level": 23,
    "name": "Fleetfooted Cavalry",
    "hp": 1400,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Fleetfooted_Cavalry_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "ab",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Black Quartz",
    "appears": "Arqa II 60"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant",
    "level": 67,
    "name": "Green Sigil",
    "hp": 855,
    "mp": 150,
    "image": "https://megatenwiki.com/images/9/92/P3R_Green_Sigil_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "ab",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Whirlwind Charm, Opal, Turquoise",
    "appears": "Adamah I 237-244"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant",
    "level": 58,
    "name": "Red Sigil",
    "hp": 800,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Red_Sigil_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Inferno Charm, Topaz, Turquoise",
    "appears": "Harabah II 199-217"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant",
    "level": 53,
    "name": "Apostate Tower",
    "hp": 600,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Apostate_Tower_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "rs",
      "elec": "ab",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Crown of Egoism, Turquoise, Garnet",
    "appears": "Harabah I 175-196"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant",
    "level": 52,
    "name": "Crazy Twins",
    "hp": 610,
    "mp": 125,
    "image": "https://megatenwiki.com/images/9/92/P3R_Crazy_Twins_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "rp",
      "wind": "no",
      "light": "nu",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Shackles of Madness, Topaz",
    "appears": "Harabah I 174-192"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant",
    "level": 37,
    "name": "Death Twins",
    "hp": 409,
    "mp": 80,
    "image": "https://megatenwiki.com/images/9/92/P3R_Death_Twins_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "ab",
      "wind": "no",
      "light": "wk",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Shackles of Morbidity, Amethyst",
    "appears": "Tziah I 120-142"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant",
    "level": 36,
    "name": "Blue Sigil",
    "hp": 400,
    "mp": 80,
    "image": "https://megatenwiki.com/images/9/92/P3R_Blue_Sigil_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "ab",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Hail Charm, Onyx",
    "appears": "Tziah I 119-142"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant",
    "level": 28,
    "name": "Dogmatic Tower",
    "hp": 288,
    "mp": 95,
    "image": "https://megatenwiki.com/images/9/92/P3R_Dogmatic_Tower_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "nu",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Crown of Obstinacy, Malachite, Amethyst",
    "appears": "Yabbashah I 83-89"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant",
    "level": 23,
    "name": "Indolent Maya",
    "hp": 252,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Indolent_Maya_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "rs",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Mask of Sloth, Malachite",
    "appears": "Yabbashah I 70-89"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant",
    "level": 23,
    "name": "Killer Twins",
    "hp": 267,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Killer_Twins_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "nu",
      "wind": "no",
      "light": "wk",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Shackles of Depravity, Amethyst, Onyx",
    "appears": "Yabbashah I 71-88"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant",
    "level": 12,
    "name": "Corrupt Tower",
    "hp": 220,
    "mp": 25,
    "image": "https://megatenwiki.com/images/9/92/P3R_Corrupt_Tower_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Crown of Vice, Malachite",
    "appears": "Arqa I 31-41"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant",
    "level": 6,
    "name": "Trance Twins",
    "hp": 110,
    "mp": 20,
    "image": "https://megatenwiki.com/images/9/92/P3R_Trance_Twins_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "rs",
      "elec": "wk",
      "wind": "no",
      "light": "wk",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Shackles of Ecstasy, Turquoise",
    "appears": "Thebel 12-21"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant P",
    "level": 77,
    "name": "Cultist of Death",
    "hp": 2473,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Cultist_of_Death_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "rs",
      "elec": "rs",
      "wind": "wk",
      "light": "ab",
      "dark": "ab",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Adamah I 253"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant P",
    "level": 71,
    "name": "Fanatic Tower B",
    "hp": 2345,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Fanatic_Tower_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "no",
      "ice": "no",
      "elec": "ab",
      "wind": "nu",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Crown of Servility",
    "appears": "Adamah I D1"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant P",
    "level": 58,
    "name": "Cultist of the Storm",
    "hp": 1950,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Cultist_of_the_Storm_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "nu",
      "pierce": "no",
      "fire": "rs",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Harabah I 179"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant P",
    "level": 50,
    "name": "Crazy Twins B",
    "hp": 1722,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Crazy_Twins_B_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "no",
      "pierce": "rs",
      "fire": "nu",
      "ice": "no",
      "elec": "no",
      "wind": "nu",
      "light": "rs",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Shackles of Madness",
    "appears": "Tziah II D1"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant P",
    "level": 49,
    "name": "Pagoda of Disaster",
    "hp": 1838,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Pagoda_of_Disaster_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "ab",
      "wind": "ab",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Quality Nihil Ore",
    "appears": "Tziah II 151"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant P",
    "level": 48,
    "name": "Dogmatic Tower B",
    "hp": 1408,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Dogmatic_Tower_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "nu",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Crown of Obstinacy",
    "appears": "Tziah I P1"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant P",
    "level": 40,
    "name": "Imposing Skyscraper",
    "hp": 1970,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Imposing_Skyscraper_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "ab",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ergotite Shard",
    "appears": "Yabbashah II 112"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant P",
    "level": 30,
    "name": "Red Sigil B",
    "hp": 1374,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Red_Sigil_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Inferno Charm",
    "appears": "Yabbashah I D3"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant P",
    "level": 18,
    "name": "Servant Tower",
    "hp": 1032,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Servant_Tower_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "rs",
      "elec": "rp",
      "wind": "rs",
      "light": "nu",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Arqa II 47"
  },
  {
    "gameId": "p3r",
    "race": "Hierophant P",
    "level": 13,
    "name": "Slaughter Twins",
    "hp": 370,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Slaughter_Twins_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "wk",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "Turquoise",
    "appears": "Arqa I 36"
  },
  {
    "gameId": "p3r",
    "race": "Lovers",
    "level": 65,
    "name": "Carnal Snake",
    "hp": 879,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Carnal_Snake_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "rs",
      "fire": "no",
      "ice": "wk",
      "elec": "nu",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Necklace of Impulse, Diamond",
    "appears": "Adamah I 231-242"
  },
  {
    "gameId": "p3r",
    "race": "Lovers",
    "level": 64,
    "name": "Royal Dancer",
    "hp": 753,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Royal_Dancer_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Balloon of Harmony, Opal, Amethyst",
    "appears": "Adamah I 227-244"
  },
  {
    "gameId": "p3r",
    "race": "Lovers",
    "level": 57,
    "name": "Immoral Snake",
    "hp": 600,
    "mp": 110,
    "image": "https://megatenwiki.com/images/9/92/P3R_Immoral_Snake_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "no",
      "pierce": "wk",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "nu",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Necklace of Craving, Emerald, Opal",
    "appears": "Harabah I 189-197"
  },
  {
    "gameId": "p3r",
    "race": "Lovers",
    "level": 55,
    "name": "Gracious Cupid",
    "hp": 610,
    "mp": 60,
    "image": "https://megatenwiki.com/images/9/92/P3R_Gracious_Cupid_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "nu",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Arrowhead of Heart, Emerald, Onyx",
    "appears": "Harabah I 182-197"
  },
  {
    "gameId": "p3r",
    "race": "Lovers",
    "level": 31,
    "name": "Insidious Maya",
    "hp": 317,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Insidious_Maya_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "rs",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Mask of Betrayal, Malachite",
    "appears": "Yabbashah II 93-117"
  },
  {
    "gameId": "p3r",
    "race": "Lovers",
    "level": 26,
    "name": "Devoted Cupid",
    "hp": 293,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Devoted_Cupid_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "rs",
      "fire": "wk",
      "ice": "wk",
      "elec": "no",
      "wind": "nu",
      "light": "no",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Arrowhead of Control, Amethyst",
    "appears": "Yabbashah I 78-89"
  },
  {
    "gameId": "p3r",
    "race": "Lovers",
    "level": 24,
    "name": "Ardent Dancer",
    "hp": 245,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Ardent_Dancer_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "wk",
      "ice": "nu",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Balloon of Feuds, Amethyst, Onyx",
    "appears": "Yabbashah I 72-89"
  },
  {
    "gameId": "p3r",
    "race": "Lovers",
    "level": 24,
    "name": "Lustful Snake",
    "hp": 276,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Lustful_Snake_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "wk",
      "elec": "no",
      "wind": "ab",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Necklace of Fantasy, Malachite, Onyx",
    "appears": "Yabbashah I 70-89"
  },
  {
    "gameId": "p3r",
    "race": "Lovers",
    "level": 24,
    "name": "Lustful Snake B",
    "hp": 1000,
    "mp": 240,
    "image": "https://megatenwiki.com/images/9/92/P3R_Lustful_Snake_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Necklace of Fantasy, Black Quartz",
    "appears": "Arqa II 55-68"
  },
  {
    "gameId": "p3r",
    "race": "Lovers",
    "level": 20,
    "name": "Jealous Cupid",
    "hp": 227,
    "mp": 25,
    "image": "https://megatenwiki.com/images/9/92/P3R_Jealous_Cupid_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "wk",
      "elec": "no",
      "wind": "nu",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Arrowhead of Envy, Turquoise",
    "appears": "Arqa II 55-66"
  },
  {
    "gameId": "p3r",
    "race": "Lovers",
    "level": 14,
    "name": "Soul Dancer",
    "hp": 223,
    "mp": 15,
    "image": "https://megatenwiki.com/images/9/92/P3R_Soul_Dancer_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Balloon of Amity, Malachite",
    "appears": "Arqa I 39-41"
  },
  {
    "gameId": "p3r",
    "race": "Lovers",
    "level": 5,
    "name": "Obsessed Cupid",
    "hp": 101,
    "mp": 15,
    "image": "https://megatenwiki.com/images/9/92/P3R_Obsessed_Cupid_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "wk",
      "elec": "no",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Arrowhead of Desire, Malachite",
    "appears": "Thebel 9-21"
  },
  {
    "gameId": "p3r",
    "race": "Lovers P",
    "level": 72,
    "name": "Invasive Serpent",
    "hp": 1831,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Invasive_Serpent_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "ab",
      "ice": "no",
      "elec": "no",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Gold Quartz",
    "appears": "Adamah I 246"
  },
  {
    "gameId": "p3r",
    "race": "Lovers P",
    "level": 64,
    "name": "Amorous Snake B",
    "hp": 2075,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Amorous_Snake_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "rp",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Necklace of Fixation",
    "appears": "Harabah I P1"
  },
  {
    "gameId": "p3r",
    "race": "Lovers P",
    "level": 61,
    "name": "Luckless Cupid",
    "hp": 1453,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Luckless_Cupid_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "rp",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Harabah II 203"
  },
  {
    "gameId": "p3r",
    "race": "Lovers P",
    "level": 52,
    "name": "Serpent of Absurdity",
    "hp": 951,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Serpent_of_Absurdity_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tziah II 170"
  },
  {
    "gameId": "p3r",
    "race": "Lovers P",
    "level": 48,
    "name": "Natural Dancer B",
    "hp": 1300,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Natural_Dancer_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "no",
      "elec": "rs",
      "wind": "nu",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Balloon of Unity",
    "appears": "Tziah I P2"
  },
  {
    "gameId": "p3r",
    "race": "Lovers P",
    "level": 47,
    "name": "Immoral Snake B",
    "hp": 1200,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Immoral_Snake_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "Necklace of Craving",
    "appears": "Tziah I P1"
  },
  {
    "gameId": "p3r",
    "race": "Lovers P",
    "level": 33,
    "name": "Controlling Partner",
    "hp": 1392,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Controlling_Partner_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "nu",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Nihil Ore",
    "appears": "Yabbashah I 91"
  },
  {
    "gameId": "p3r",
    "race": "Lovers P",
    "level": 33,
    "name": "Dependent Partner",
    "hp": 1488,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Dependent_Partner_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "nu",
      "ice": "nu",
      "elec": "nu",
      "wind": "nu",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Yabbashah I 91"
  },
  {
    "gameId": "p3r",
    "race": "Lovers P",
    "level": 23,
    "name": "Jealous Cupid B",
    "hp": 283,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Jealous_Cupid_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rp",
      "ice": "no",
      "elec": "rs",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Arrowhead of Envy",
    "appears": "Unknown"
  },
  {
    "gameId": "p3r",
    "race": "Lovers P",
    "level": 17,
    "name": "Enslaved Cupid",
    "hp": 240,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Enslaved_Cupid_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Arqa II 47"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 73,
    "name": "Wicked Turret",
    "hp": 1232,
    "mp": 150,
    "image": "https://megatenwiki.com/images/9/92/P3R_Wicked_Turret_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "rp",
      "fire": "rs",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ominous Turret, Opal, Ruby",
    "appears": "Adamah II 257-261"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 64,
    "name": "Slaughter Drive",
    "hp": 775,
    "mp": 150,
    "image": "https://megatenwiki.com/images/9/92/P3R_Slaughter_Drive_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "nu",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Cruel Rotary Leg, Opal, Diamond",
    "appears": "Harabah II 219-224"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 56,
    "name": "Battle Wheel",
    "hp": 590,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Battle_Wheel_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "War Wheel, Garnet",
    "appears": "Harabah I 186-197"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 54,
    "name": "Scarlet Turret",
    "hp": 640,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Scarlet_Turret_Model.png",
    "resistances": {
      "slash": "rp",
      "strike": "nu",
      "pierce": "no",
      "fire": "rs",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Bloodstained Turret, Garnet, Topaz",
    "appears": "Harabah I 177-196"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 51,
    "name": "Scarlet Turret B",
    "hp": 1771,
    "mp": 300,
    "image": "https://megatenwiki.com/images/9/92/P3R_Scarlet_Turret_B_Model.png",
    "resistances": {
      "slash": "rp",
      "strike": "nu",
      "pierce": "no",
      "fire": "rs",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Bloodstained Turret, Silver Quartz",
    "appears": "Tziah II 145-154"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 42,
    "name": "Arcane Turret",
    "hp": 598,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Arcane_Turret_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "no",
      "pierce": "nu",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Kill Shot Turret, Emerald",
    "appears": "Tziah I 139-142"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 41,
    "name": "Brave Wheel",
    "hp": 500,
    "mp": 60,
    "image": "https://megatenwiki.com/images/9/92/P3R_Brave_Wheel_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Surmounting Wheel, Topaz, Amethyst",
    "appears": "Tziah I 134-142"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 40,
    "name": "Killer Drive",
    "hp": 458,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Killer_Drive_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "wk",
      "wind": "no",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ruthless Rotary Leg, Amethyst, Topaz",
    "appears": "Tziah I 130-141"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 36,
    "name": "Ill-Fated Maya",
    "hp": 390,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Ill-Fated_Maya_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Mask of Concession, Malachite, Turquoise",
    "appears": "Tziah I 119-141"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 34,
    "name": "Wild Drive",
    "hp": 379,
    "mp": 80,
    "image": "https://megatenwiki.com/images/9/92/P3R_Wild_Drive_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Brutish Rotary Leg, Onyx, Amethyst",
    "appears": "Yabbashah II 100-117"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 28,
    "name": "Wild Drive B",
    "hp": 1250,
    "mp": 160,
    "image": "https://megatenwiki.com/images/9/92/P3R_Wild_Drive_B_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Brutish Rotary Leg, Black Quartz",
    "appears": "Yabbashah I 70-81"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 26,
    "name": "Mach Wheel",
    "hp": 270,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Mach_Wheel_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "nu",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Rapid Wheel, Onyx",
    "appears": "Yabbashah I 78-89"
  },
  {
    "gameId": "p3r",
    "race": "Chariot",
    "level": 21,
    "name": "Bestial Wheel B",
    "hp": 920,
    "mp": 180,
    "image": "https://megatenwiki.com/images/9/92/P3R_Bestial_Wheel_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Steel Wheel, Onyx",
    "appears": "Arqa II 44-53"
  },
  {
    "gameId": "p3r",
    "race": "Chariot P",
    "level": 80,
    "name": "Hallowed Turret B",
    "hp": 4320,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Hallowed_Turret_B_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "rs",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Nihil Black Model",
    "appears": "Adamah I P1"
  },
  {
    "gameId": "p3r",
    "race": "Chariot P",
    "level": 65,
    "name": "Rampage Drive C",
    "hp": 2400,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Rampage_Drive_C_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ruinous Rotary Leg",
    "appears": "Harabah II D1"
  },
  {
    "gameId": "p3r",
    "race": "Chariot P",
    "level": 60,
    "name": "Chaos Panzer",
    "hp": 2003,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Chaos_Panzer_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "no",
      "elec": "no",
      "wind": "nu",
      "light": "rp",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Prime Nihil Blade",
    "appears": "Harabah I 188"
  },
  {
    "gameId": "p3r",
    "race": "Chariot P",
    "level": 50,
    "name": "Dancing Beast Wheel",
    "hp": 2066,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Dancing_Beast_Wheel_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "no",
      "wind": "no",
      "light": "rs",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tziah II 155"
  },
  {
    "gameId": "p3r",
    "race": "Chariot P",
    "level": 42,
    "name": "Raging Turret",
    "hp": 1550,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Raging_Turret_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Quality Nihil Blade",
    "appears": "Tziah I 126"
  },
  {
    "gameId": "p3r",
    "race": "Chariot P",
    "level": 34,
    "name": "Rampage Drive B",
    "hp": 420,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Rampage_Drive_B_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ruinous Rotary Leg",
    "appears": "Yabbashah I P2"
  },
  {
    "gameId": "p3r",
    "race": "Chariot P",
    "level": 25,
    "name": "Wicked Turret B",
    "hp": 1215,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Wicked_Turret_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "nu",
      "pierce": "nu",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ominous Turret",
    "appears": "Unknown"
  },
  {
    "gameId": "p3r",
    "race": "Chariot P",
    "level": 9,
    "name": "Swift Axle",
    "hp": 422,
    "mp": 300,
    "image": "https://megatenwiki.com/images/9/92/P3R_Swift_Axle_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Shaft Fragment",
    "appears": "Thebel 17"
  },
  {
    "gameId": "p3r",
    "race": "Chariot P",
    "level": 7,
    "name": "Barbaric Beast Wheel",
    "hp": 390,
    "mp": 300,
    "image": "https://megatenwiki.com/images/9/92/P3R_Barbaric_Beast_Wheel_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Thebel 11"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 74,
    "name": "Harmony Giant",
    "hp": 1376,
    "mp": 180,
    "image": "https://megatenwiki.com/images/9/92/P3R_Harmony_Giant_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "nu",
      "pierce": "rp",
      "fire": "no",
      "ice": "no",
      "elec": "rp",
      "wind": "rp",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Immovable Balance, Opal, Ruby",
    "appears": "Adamah II 260-261"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 65,
    "name": "Light Balance",
    "hp": 721,
    "mp": 190,
    "image": "https://megatenwiki.com/images/9/92/P3R_Light_Balance_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "rs",
      "elec": "rs",
      "wind": "wk",
      "light": "rp",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Platinum Plates, Topaz, Emerald",
    "appears": "Adamah I 233-239"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 64,
    "name": "Bigoted Maya",
    "hp": 601,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Bigoted_Maya_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "nu",
      "wind": "no",
      "light": "wk",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Mask of Prejudice, Turquoise, Opal",
    "appears": "Adamah I 227-235"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 64,
    "name": "Doom Sword",
    "hp": 1002,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Doom_Sword_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "no",
      "fire": "wk",
      "ice": "rp",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Tamahagane Blade, Opal, Garnet",
    "appears": "Adamah I 228-242"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 63,
    "name": "Stasis Giant",
    "hp": 550,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Stasis_Giant_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "nu",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Wavering Balance, Garnet",
    "appears": "Harabah II 213-224"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 61,
    "name": "Judgment Sword",
    "hp": 600,
    "mp": 110,
    "image": "https://megatenwiki.com/images/9/92/P3R_Judgment_Sword_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "ab",
      "wind": "no",
      "light": "nu",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Steel Blade, Garnet, Malachite",
    "appears": "Harabah II 206-224"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 48,
    "name": "Conviction Sword",
    "hp": 479,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Conviction_Sword_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "no",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Bronze Blade, Topaz, Garnet",
    "appears": "Tziah II 159-168"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 47,
    "name": "Order Giant B",
    "hp": 1111,
    "mp": 240,
    "image": "https://megatenwiki.com/images/9/92/P3R_Order_Giant_B_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "wk",
      "elec": "rp",
      "wind": "rp",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Warped Balance, Silver Quartz",
    "appears": "Tziah I 133-142"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 46,
    "name": "Order Giant",
    "hp": 483,
    "mp": 80,
    "image": "https://megatenwiki.com/images/9/92/P3R_Order_Giant_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "wk",
      "elec": "rp",
      "wind": "rp",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Warped Balance, Emerald",
    "appears": "Tziah II 153-168"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 31,
    "name": "Justice Sword",
    "hp": 322,
    "mp": 80,
    "image": "https://megatenwiki.com/images/9/92/P3R_Justice_Sword_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "rs",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Rusty Blade, Onyx",
    "appears": "Yabbashah II 93-116"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 17,
    "name": "Sky Balance",
    "hp": 221,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Sky_Balance_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "wk",
      "elec": "rp",
      "wind": "rp",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Purple-Green Plates, Amethyst, Turquoise",
    "appears": "Arqa II 45-68"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 10,
    "name": "Heat Balance",
    "hp": 170,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Heat_Balance_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "rs",
      "elec": "wk",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Red-Blue Plates, Turquoise, Amethyst",
    "appears": "Arqa I 23-34"
  },
  {
    "gameId": "p3r",
    "race": "Justice",
    "level": 9,
    "name": "Heat Balance B",
    "hp": 100,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Heat_Balance_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "rs",
      "elec": "wk",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Monorail"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 75,
    "name": "High Judge of Hell",
    "hp": 1913,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_High_Judge_of_Hell_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "nu",
      "pierce": "rs",
      "fire": "no",
      "ice": "nu",
      "elec": "no",
      "wind": "nu",
      "light": "no",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "Nihil White Model",
    "appears": "Adamah I 247"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 72,
    "name": "Overseer of Creation",
    "hp": 2098,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Overseer_of_Creation_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "rp",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Diamond",
    "appears": "Adamah I 241"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 64,
    "name": "Omnipotent Balance",
    "hp": 3000,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Omnipotent_Balance_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "nu",
      "elec": "nu",
      "wind": "nu",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Golden Plates",
    "appears": "Harabah I P2"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 63,
    "name": "Light Balance B",
    "hp": 1800,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Light_Balance_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "rp",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Prime Nihil Ore",
    "appears": "Harabah I P2"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 62,
    "name": "Heat Balance C",
    "hp": 800,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Heat_Balance_C_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rp",
      "ice": "rp",
      "elec": "wk",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Red-Blue Plates",
    "appears": "Harabah I P2"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 62,
    "name": "Sky Balance B",
    "hp": 1000,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Sky_Balance_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "wk",
      "elec": "rp",
      "wind": "rp",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Purple-Green Plates",
    "appears": "Harabah I P2"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 61,
    "name": "Void Giant B",
    "hp": 1721,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Void_Giant_B_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "rs",
      "pierce": "no",
      "fire": "wk",
      "ice": "rp",
      "elec": "no",
      "wind": "rp",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Equal Balance",
    "appears": "Harabah I D1"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 59,
    "name": "Merciless Judge",
    "hp": 1200,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Merciless_Judge_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "nu",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "rs",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Prime Nihil Cloth",
    "appears": "Harabah I 184"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 59,
    "name": "World Balance B",
    "hp": 1753,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_World_Balance_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Golden Plates",
    "appears": "Harabah I D2"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 58,
    "name": "Executive Greatsword",
    "hp": 1119,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Executive_Greatsword_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "ab",
      "wind": "no",
      "light": "rp",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Harabah I 184"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 54,
    "name": "Cruel Greatsword",
    "hp": 1578,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Cruel_Greatsword_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tziah II 170"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 43,
    "name": "Judgment Sword B",
    "hp": 1445,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Judgment_Sword_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "nu",
      "fire": "no",
      "ice": "no",
      "elec": "ab",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Steel Blade",
    "appears": "Tziah I D1"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 28,
    "name": "Heat Overseer",
    "hp": 815,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Heat_Overseer_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "ab",
      "elec": "wk",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Nihil Blade",
    "appears": "Yabbashah I 82"
  },
  {
    "gameId": "p3r",
    "race": "Justice P",
    "level": 28,
    "name": "Sky Overseer",
    "hp": 815,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Sky_Overseer_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "wk",
      "elec": "ab",
      "wind": "ab",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Vibrant Feather",
    "appears": "Yabbashah I 82"
  },
  {
    "gameId": "p3r",
    "race": "Hermit",
    "level": 69,
    "name": "Noble Seeker",
    "hp": 1002,
    "mp": 200,
    "image": "https://megatenwiki.com/images/9/92/P3R_Noble_Seeker_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rp",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Coruscant Eyeball, Emerald, Garnet",
    "appears": "Adamah I 248-251"
  },
  {
    "gameId": "p3r",
    "race": "Hermit",
    "level": 64,
    "name": "Amenti Raven",
    "hp": 711,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Amenti_Raven_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "rp",
      "ice": "no",
      "elec": "no",
      "wind": "rs",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Black Hole Lantern, Onyx, Garnet",
    "appears": "Adamah I 227-244"
  },
  {
    "gameId": "p3r",
    "race": "Hermit",
    "level": 59,
    "name": "Fate Seeker",
    "hp": 650,
    "mp": 140,
    "image": "https://megatenwiki.com/images/9/92/P3R_Fate_Seeker_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "nu",
      "ice": "nu",
      "elec": "nu",
      "wind": "nu",
      "light": "wk",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Decaying Eyeball, Garnet",
    "appears": "Harabah II 201-222"
  },
  {
    "gameId": "p3r",
    "race": "Hermit",
    "level": 58,
    "name": "Desirous Maya",
    "hp": 550,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Desirous_Maya_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Mask of Greed, Garnet, Malachite",
    "appears": "Harabah II 199-224"
  },
  {
    "gameId": "p3r",
    "race": "Hermit",
    "level": 42,
    "name": "Death Seeker",
    "hp": 437,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Death_Seeker_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Murky Eyeball, Topaz",
    "appears": "Tziah II 145-168"
  },
  {
    "gameId": "p3r",
    "race": "Hermit",
    "level": 38,
    "name": "Phantom Lord",
    "hp": 382,
    "mp": 140,
    "image": "https://megatenwiki.com/images/9/92/P3R_Phantom_Lord_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "ab",
      "light": "wk",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Leader's Candlestick, Onyx, Topaz",
    "appears": "Yabbashah II 109-117"
  },
  {
    "gameId": "p3r",
    "race": "Hermit",
    "level": 32,
    "name": "Ice Raven",
    "hp": 329,
    "mp": 80,
    "image": "https://megatenwiki.com/images/9/92/P3R_Ice_Raven_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "rp",
      "elec": "no",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Chilling Lantern, Amethyst",
    "appears": "Yabbashah II 94-117"
  },
  {
    "gameId": "p3r",
    "race": "Hermit",
    "level": 22,
    "name": "Phantom Master",
    "hp": 278,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Phantom_Master_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "nu",
      "wind": "no",
      "light": "wk",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Lord's Candlestick, Onyx",
    "appears": "Arqa II 61-68"
  },
  {
    "gameId": "p3r",
    "race": "Hermit",
    "level": 16,
    "name": "Vicious Raven",
    "hp": 214,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Vicious_Raven_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "wk",
      "elec": "no",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Incandescent Lantern, Amethyst",
    "appears": "Arqa II 44-63"
  },
  {
    "gameId": "p3r",
    "race": "Hermit",
    "level": 13,
    "name": "Phantom Mage",
    "hp": 231,
    "mp": 30,
    "image": "https://megatenwiki.com/images/9/92/P3R_Phantom_Mage_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Wizard's Candlestick, Turquoise",
    "appears": "Arqa I 37-41"
  },
  {
    "gameId": "p3r",
    "race": "Hermit",
    "level": 11,
    "name": "Black Raven",
    "hp": 192,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Black_Raven_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "no",
      "elec": "no",
      "wind": "rs",
      "light": "wk",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Dusk Lantern, Amethyst",
    "appears": "Arqa I 25-37"
  },
  {
    "gameId": "p3r",
    "race": "Hermit P",
    "level": 74,
    "name": "Appropriating Noble",
    "hp": 2349,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Appropriating_Noble_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "rs",
      "pierce": "no",
      "fire": "no",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Adamah I 246"
  },
  {
    "gameId": "p3r",
    "race": "Hermit P",
    "level": 69,
    "name": "Phantom Master B",
    "hp": 1200,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Phantom_Master_B_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "no",
      "pierce": "wk",
      "fire": "no",
      "ice": "ab",
      "elec": "rs",
      "wind": "no",
      "light": "no",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Lord's Candlestick",
    "appears": "Harabah II P1"
  },
  {
    "gameId": "p3r",
    "race": "Hermit P",
    "level": 67,
    "name": "Phantom King B",
    "hp": 2422,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Phantom_King_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "rp",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Divine Candlestick",
    "appears": "Harabah II D3"
  },
  {
    "gameId": "p3r",
    "race": "Hermit P",
    "level": 63,
    "name": "Necromachinery",
    "hp": 2397,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Necromachinery_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "nu",
      "wind": "no",
      "light": "rp",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Lily Petal",
    "appears": "Harabah I 193"
  },
  {
    "gameId": "p3r",
    "race": "Hermit P",
    "level": 58,
    "name": "Resentful Surveillant",
    "hp": 1001,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Resentful_Surveillant_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "rs",
      "wind": "no",
      "light": "no",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Harabah I 188"
  },
  {
    "gameId": "p3r",
    "race": "Hermit P",
    "level": 29,
    "name": "Arcanist Decapitator",
    "hp": 1200,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Arcanist_Decapitator_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "no",
      "wind": "nu",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Yabbashah I 82"
  },
  {
    "gameId": "p3r",
    "race": "Hermit P",
    "level": 29,
    "name": "Phantom Mage B",
    "hp": 1213,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Phantom_Mage_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "rs",
      "wind": "wk",
      "light": "rp",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Wizard's Candlestick",
    "appears": "Yabbashah I D2"
  },
  {
    "gameId": "p3r",
    "race": "Hermit P",
    "level": 12,
    "name": "Will O' Wisp Raven",
    "hp": 677,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Will_O%27_Wisp_Raven_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "ab",
      "ice": "wk",
      "elec": "no",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Arqa I 28"
  },
  {
    "gameId": "p3r",
    "race": "Hermit P",
    "level": 5,
    "name": "Ruthless Ice Raven",
    "hp": 218,
    "mp": 300,
    "image": "https://megatenwiki.com/images/9/92/P3R_Ruthless_Ice_Raven_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "rs",
      "elec": "no",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Thebel 5"
  },
  {
    "gameId": "p3r",
    "race": "Fortune",
    "level": 70,
    "name": "Platinum Dice",
    "hp": 1093,
    "mp": 80,
    "image": "https://megatenwiki.com/images/9/92/P3R_Platinum_Dice_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "nu",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Platinum Dice, Diamond, Opal",
    "appears": "Adamah I 249-251"
  },
  {
    "gameId": "p3r",
    "race": "Fortune",
    "level": 67,
    "name": "Infinite Sand",
    "hp": 778,
    "mp": 160,
    "image": "https://megatenwiki.com/images/9/92/P3R_Infinite_Sand_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "wk",
      "pierce": "wk",
      "fire": "nu",
      "ice": "nu",
      "elec": "nu",
      "wind": "nu",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Blue Sand, Diamond, Opal",
    "appears": "Adamah I 237-244"
  },
  {
    "gameId": "p3r",
    "race": "Fortune",
    "level": 65,
    "name": "Death Dice",
    "hp": 904,
    "mp": 77,
    "image": "https://megatenwiki.com/images/9/92/P3R_Death_Dice_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "no",
      "elec": "wk",
      "wind": "rp",
      "light": "rs",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "Ring of Asphyxiation, Diamond, Ruby",
    "appears": "Adamah I 231-239"
  },
  {
    "gameId": "p3r",
    "race": "Fortune",
    "level": 63,
    "name": "Iron Dice",
    "hp": 500,
    "mp": 70,
    "image": "https://megatenwiki.com/images/9/92/P3R_Iron_Dice_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Steel Dice, Topaz, Emerald",
    "appears": "Harabah II 213-224"
  },
  {
    "gameId": "p3r",
    "race": "Fortune",
    "level": 61,
    "name": "Perpetual Sand",
    "hp": 700,
    "mp": 140,
    "image": "https://megatenwiki.com/images/9/92/P3R_Perpetual_Sand_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "wk",
      "pierce": "wk",
      "fire": "nu",
      "ice": "nu",
      "elec": "nu",
      "wind": "nu",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Orange Sand, Opal, Garnet",
    "appears": "Harabah II 208-224"
  },
  {
    "gameId": "p3r",
    "race": "Fortune",
    "level": 60,
    "name": "Curse Dice",
    "hp": 660,
    "mp": 140,
    "image": "https://megatenwiki.com/images/9/92/P3R_Curse_Dice_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ring of Resentment, Topaz, Turquoise",
    "appears": "Harabah II 204-222"
  },
  {
    "gameId": "p3r",
    "race": "Fortune",
    "level": 60,
    "name": "Curse Dice B",
    "hp": 1777,
    "mp": 280,
    "image": "https://megatenwiki.com/images/9/92/P3R_Curse_Dice_B_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Ring of Resentment, Silver Quartz",
    "appears": "Harabah I 173-183"
  },
  {
    "gameId": "p3r",
    "race": "Fortune",
    "level": 52,
    "name": "Imprudent Maya",
    "hp": 600,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Imprudent_Maya_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "no",
      "ice": "nu",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Mask of Folly, Garnet, Malachite",
    "appears": "Harabah I 173-194"
  },
  {
    "gameId": "p3r",
    "race": "Fortune",
    "level": 45,
    "name": "Flowing Sand",
    "hp": 445,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Flowing_Sand_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "wk",
      "pierce": "wk",
      "fire": "rp",
      "ice": "rp",
      "elec": "rp",
      "wind": "rp",
      "light": "rp",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Red Sand, Onyx, Topaz",
    "appears": "Tziah II 152-168"
  },
  {
    "gameId": "p3r",
    "race": "Fortune",
    "level": 33,
    "name": "Mind Dice",
    "hp": 338,
    "mp": 60,
    "image": "https://megatenwiki.com/images/9/92/P3R_Mind_Dice_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "rs",
      "elec": "wk",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ring of Anxiety, Turquoise, Onyx",
    "appears": "Yabbashah II 96-117"
  },
  {
    "gameId": "p3r",
    "race": "Fortune",
    "level": 16,
    "name": "Bronze Dice",
    "hp": 202,
    "mp": 66,
    "image": "https://megatenwiki.com/images/9/92/P3R_Bronze_Dice_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "nu",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Copper Dice, Turquoise, Malachite",
    "appears": "Arqa II 44-63"
  },
  {
    "gameId": "p3r",
    "race": "Fortune P",
    "level": 74,
    "name": "Reckoning Dice B",
    "hp": 1745,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Reckoning_Dice_B_Model.png",
    "resistances": {
      "slash": "ab",
      "strike": "ab",
      "pierce": "ab",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ring of Retribution",
    "appears": "Adamah I D2"
  },
  {
    "gameId": "p3r",
    "race": "Fortune P",
    "level": 69,
    "name": "Obsessive Sand",
    "hp": 2000,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Obsessive_Sand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "rs",
      "elec": "rs",
      "wind": "rs",
      "light": "rs",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "AS Refined Material",
    "appears": "Adamah I 230"
  },
  {
    "gameId": "p3r",
    "race": "Fortune P",
    "level": 66,
    "name": "Scornful Dice",
    "hp": 1444,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Scornful_Dice_Model.png",
    "resistances": {
      "slash": "ab",
      "strike": "ab",
      "pierce": "ab",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Opal",
    "appears": "Harabah II 218"
  },
  {
    "gameId": "p3r",
    "race": "Fortune P",
    "level": 60,
    "name": "Eternal Sand B",
    "hp": 2000,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Eternal_Sand_B_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "rp",
      "elec": "rp",
      "wind": "no",
      "light": "no",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "White Sand",
    "appears": "Harabah I D3"
  },
  {
    "gameId": "p3r",
    "race": "Fortune P",
    "level": 41,
    "name": "Platinum Dice B",
    "hp": 1600,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Platinum_Dice_B_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "nu",
      "wind": "no",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Platinum Dice",
    "appears": "Yabbashah II P3"
  },
  {
    "gameId": "p3r",
    "race": "Fortune P",
    "level": 40,
    "name": "Bronze Dice B",
    "hp": 1492,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Bronze_Dice_B_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Copper Dice",
    "appears": "Yabbashah II P1"
  },
  {
    "gameId": "p3r",
    "race": "Fortune P",
    "level": 40,
    "name": "Iron Dice B",
    "hp": 1492,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Iron_Dice_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "wk",
      "elec": "nu",
      "wind": "no",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Steel Dice",
    "appears": "Yabbashah II P2"
  },
  {
    "gameId": "p3r",
    "race": "Fortune P",
    "level": 39,
    "name": "Rampaging Sand",
    "hp": 1213,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Rampaging_Sand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "rs",
      "ice": "rs",
      "elec": "rs",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Tziah I 125"
  },
  {
    "gameId": "p3r",
    "race": "Fortune P",
    "level": 28,
    "name": "Ochlocratic Sand",
    "hp": 924,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Ochlocratic_Sand_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rp",
      "ice": "wk",
      "elec": "nu",
      "wind": "nu",
      "light": "rs",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Yabbashah I 77"
  },
  {
    "gameId": "p3r",
    "race": "Fortune P",
    "level": 22,
    "name": "Terror Dice",
    "hp": 812,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Terror_Dice_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "nu",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Ring of Anxiety",
    "appears": "Unknown"
  },
  {
    "gameId": "p3r",
    "race": "Fortune P",
    "level": 21,
    "name": "Flowing Sand B",
    "hp": 820,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Flowing_Sand_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "wk",
      "pierce": "no",
      "fire": "no",
      "ice": "rs",
      "elec": "rs",
      "wind": "no",
      "light": "rs",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Red Sand",
    "appears": "Unknown"
  },
  {
    "gameId": "p3r",
    "race": "Fortune P",
    "level": 14,
    "name": "Disturbing Dice",
    "hp": 690,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Disturbing_Dice_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Arqa I 36"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 79,
    "name": "Tenjin Musha C",
    "hp": 2903,
    "mp": 360,
    "image": "https://megatenwiki.com/images/9/92/P3R_Tenjin_Musha_C_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "rs",
      "elec": "rs",
      "wind": "rs",
      "light": "rs",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "Ruling Helmet, Gold Quartz, Ruby",
    "appears": "Adamah I 248-261"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 66,
    "name": "Daring Gigas B",
    "hp": 2040,
    "mp": 180,
    "image": "https://megatenwiki.com/images/9/92/P3R_Daring_Gigas_B_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Fighter's Pants, Opal, Gold Quartz",
    "appears": "Harabah II 199-211"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 66,
    "name": "Onnen Musha",
    "hp": 900,
    "mp": 180,
    "image": "https://megatenwiki.com/images/9/92/P3R_Onnen_Musha_Model.png",
    "resistances": {
      "slash": "rp",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Vengeful Helmet, Emerald, Garnet",
    "appears": "Adamah I 233-239"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 54,
    "name": "Mighty Beast",
    "hp": 650,
    "mp": 75,
    "image": "https://megatenwiki.com/images/9/92/P3R_Mighty_Beast_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Wicked Fur, Garnet, Amethyst",
    "appears": "Harabah I 180-197"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 52,
    "name": "Kaiden Musha",
    "hp": 630,
    "mp": 150,
    "image": "https://megatenwiki.com/images/9/92/P3R_Kaiden_Musha_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Warlord Helmet, Turquoise, Emerald",
    "appears": "Harabah I 173-196"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 45,
    "name": "Hakurou Musha",
    "hp": 467,
    "mp": 90,
    "image": "https://megatenwiki.com/images/9/92/P3R_Hakurou_Musha_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Samurai Helmet, Emerald, Topaz",
    "appears": "Tziah II 149-168"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 44,
    "name": "Hakurou Musha B",
    "hp": 1897,
    "mp": 150,
    "image": "https://megatenwiki.com/images/9/92/P3R_Hakurou_Musha_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Samurai Helmet, Emerald",
    "appears": "Tziah I 119-131"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 42,
    "name": "Visceral Maya",
    "hp": 420,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Visceral_Maya_Model.png",
    "resistances": {
      "slash": "nu",
      "strike": "nu",
      "pierce": "nu",
      "fire": "wk",
      "ice": "wk",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Mask of Reality, Malachite",
    "appears": "Tziah II 145-166"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 35,
    "name": "Furious Gigas",
    "hp": 560,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Furious_Gigas_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "rs",
      "pierce": "no",
      "fire": "rs",
      "ice": "no",
      "elec": "rs",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Hero's Pants, Onyx, Amethyst",
    "appears": "Yabbashah II 97-114"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 23,
    "name": "Enslaved Beast",
    "hp": 285,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Enslaved_Beast_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Servant's Fur, Onyx",
    "appears": "Arqa II 65-68"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 19,
    "name": "Steel Gigas",
    "hp": 273,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Steel_Gigas_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "rs",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Iron-Lined Pants, Turquoise, Amethyst",
    "appears": "Arqa II 48-68"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 16,
    "name": "Enslaved Beast B",
    "hp": 940,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Enslaved_Beast_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Servant's Fur, Amethyst",
    "appears": "Arqa I 37-41"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 14,
    "name": "Steel Gigas B",
    "hp": 870,
    "mp": 70,
    "image": "https://megatenwiki.com/images/9/92/P3R_Steel_Gigas_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "rs",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Iron-Lined Pants, Amethyst",
    "appears": "Arqa I 29-34"
  },
  {
    "gameId": "p3r",
    "race": "Strength",
    "level": 12,
    "name": "Wild Beast",
    "hp": 281,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Wild_Beast_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "wk",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Beastly Fur, Malachite, Amethyst",
    "appears": "Arqa I 33-41"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 81,
    "name": "Shadow of the Void",
    "hp": 5000,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Shadow_of_the_Void_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Dead Moon's Husk",
    "appears": "Adamah I P3"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 80,
    "name": "Tenjin Musha B",
    "hp": 3600,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Tenjin_Musha_B_Model.png",
    "resistances": {
      "slash": "rp",
      "strike": "rp",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "ab",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Nihil White Model",
    "appears": "Adamah I P2"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 79,
    "name": "Hakurou Musha C",
    "hp": 2400,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Hakurou_Musha_C_Model.png",
    "resistances": {
      "slash": "rp",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "rp",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Samurai Helmet",
    "appears": "Adamah I P2"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 79,
    "name": "Kaiden Musha B",
    "hp": 2620,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Kaiden_Musha_B_Model.png",
    "resistances": {
      "slash": "rp",
      "strike": "no",
      "pierce": "no",
      "fire": "rp",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Warlord Helmet",
    "appears": "Adamah I P2"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 79,
    "name": "Onnen Musha B",
    "hp": 2700,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Onnen_Musha_B_Model.png",
    "resistances": {
      "slash": "rp",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "ab",
      "elec": "no",
      "wind": "ab",
      "light": "no",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Vengeful Helmet",
    "appears": "Adamah I P2"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 65,
    "name": "Deadly Eldest Sibling",
    "hp": 1722,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Deadly_Eldest_Sibling_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "ab",
      "elec": "no",
      "wind": "ab",
      "light": "no",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Harabah II 212"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 64,
    "name": "Blazing Middle Sibling",
    "hp": 1490,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Blazing_Middle_Sibling_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rp",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Harabah II 212"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 64,
    "name": "Voltaic Youngest Sibling",
    "hp": 1641,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Voltaic_Youngest_Sibling_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "rp",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Harabah II 212"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 63,
    "name": "Feral Beast",
    "hp": 1596,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Feral_Beast_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "rs",
      "light": "no",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Wicked Fur",
    "appears": "Unknown"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 63,
    "name": "Icebreaker Lion",
    "hp": 2185,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Icebreaker_Lion_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "nu",
      "pierce": "no",
      "fire": "wk",
      "ice": "nu",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "Prime Nihil Ore",
    "appears": "Harabah II 203"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 55,
    "name": "Invigorated Gigas",
    "hp": 2600,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Invigorated_Gigas_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "rs",
      "elec": "no",
      "wind": "no",
      "light": "nu",
      "dark": "nu",
      "almighty": "no"
    },
    "drops": "Ergotite Chunk",
    "appears": "Tziah II 171"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 40,
    "name": "Ultimate Gigas",
    "hp": 800,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Ultimate_Gigas_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Unknown"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 36,
    "name": "Nemean Beast B",
    "hp": 1443,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Nemean_Beast_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "rs",
      "wind": "wk",
      "light": "rs",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Divine Fur",
    "appears": "Yabbashah II D1"
  },
  {
    "gameId": "p3r",
    "race": "Strength P",
    "level": 19,
    "name": "Profligate Gigas",
    "hp": 450,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Profligate_Gigas_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "wk",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "-",
    "appears": "Arqa II 54"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 71,
    "name": "Fierce Cyclops",
    "hp": 924,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Fierce_Cyclops_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "no",
      "pierce": "wk",
      "fire": "ab",
      "ice": "no",
      "elec": "no",
      "wind": "ab",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Cross of Resignation, Diamond, Ruby",
    "appears": "Adamah I 250-251"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 70,
    "name": "Jotun of Evil",
    "hp": 2398,
    "mp": 250,
    "image": "https://megatenwiki.com/images/9/92/P3R_Jotun_of_Evil_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "wk",
      "pierce": "wk",
      "fire": "rp",
      "ice": "rp",
      "elec": "rp",
      "wind": "rp",
      "light": "rp",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Infernal Wood Horse, Ruby",
    "appears": "Adamah I 248-251"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 69,
    "name": "Jotun of Evil B",
    "hp": 4000,
    "mp": 500,
    "image": "https://megatenwiki.com/images/9/92/P3R_Jotun_of_Evil_B_Model.png",
    "resistances": {
      "slash": "wk",
      "strike": "wk",
      "pierce": "wk",
      "fire": "rp",
      "ice": "rp",
      "elec": "rp",
      "wind": "rp",
      "light": "rp",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Infernal Wood Horse, Gold Quartz",
    "appears": "Harabah II 213-224"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 69,
    "name": "Minotaur I",
    "hp": 1174,
    "mp": 180,
    "image": "https://megatenwiki.com/images/9/92/P3R_Minotaur_I_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "rp",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Ver. I Restraints, Opal, Ruby",
    "appears": "Adamah I 248-251"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 67,
    "name": "Devious Maya",
    "hp": 631,
    "mp": 75,
    "image": "https://megatenwiki.com/images/9/92/P3R_Devious_Maya_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Mask of Sacrifice, Malachite, Diamond",
    "appears": "Adamah I 237-250"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 64,
    "name": "Mad Cyclops",
    "hp": 712,
    "mp": 70,
    "image": "https://megatenwiki.com/images/9/92/P3R_Mad_Cyclops_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "rs",
      "ice": "rs",
      "elec": "rs",
      "wind": "rs",
      "light": "wk",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Cross of Sanity, Opal",
    "appears": "Harabah II 221-224"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 63,
    "name": "Jotun of Blood B",
    "hp": 2639,
    "mp": 100,
    "image": "https://megatenwiki.com/images/9/92/P3R_Jotun_of_Blood_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Bloody Wood Horse, Silver Quartz, Opal",
    "appears": "Harabah I 185-197"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 63,
    "name": "Minotaur II",
    "hp": 704,
    "mp": 120,
    "image": "https://megatenwiki.com/images/9/92/P3R_Minotaur_II_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "nu",
      "pierce": "no",
      "fire": "no",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "ab",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ver. II Restraints, Garnet",
    "appears": "Harabah II 215-224"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 62,
    "name": "Jotun of Blood",
    "hp": 954,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Jotun_of_Blood_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "wk",
      "almighty": "no"
    },
    "drops": "Bloody Wood Horse, Garnet",
    "appears": "Harabah II 209-224"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 50,
    "name": "Mighty Cyclops",
    "hp": 400,
    "mp": 80,
    "image": "https://megatenwiki.com/images/9/92/P3R_Mighty_Cyclops_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Cross of Ineptitude, Garnet",
    "appears": "Tziah II 164-168"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 49,
    "name": "Minotaur III",
    "hp": 373,
    "mp": 50,
    "image": "https://megatenwiki.com/images/9/92/P3R_Minotaur_III_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "nu",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "wk",
      "wind": "no",
      "light": "rp",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ver. III Restraints, Emerald",
    "appears": "Tziah II 162-168"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 39,
    "name": "Jotun of Power",
    "hp": 410,
    "mp": 75,
    "image": "https://megatenwiki.com/images/9/92/P3R_Jotun_of_Power_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "rs",
      "ice": "rs",
      "elec": "rs",
      "wind": "rs",
      "light": "rs",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "Sadistic Wood Horse, Topaz",
    "appears": "Yabbashah II 113-117"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 37,
    "name": "Minotaur IV",
    "hp": 380,
    "mp": 40,
    "image": "https://megatenwiki.com/images/9/92/P3R_Minotaur_IV_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ver. IV Restraints, Onyx",
    "appears": "Yabbashah II 106-117"
  },
  {
    "gameId": "p3r",
    "race": "Hanged",
    "level": 32,
    "name": "Jotun of Power B",
    "hp": 2100,
    "mp": 150,
    "image": "https://megatenwiki.com/images/9/92/P3R_Jotun_of_Power_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "wk",
      "fire": "rs",
      "ice": "rs",
      "elec": "rs",
      "wind": "rs",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Sadistic Wood Horse, Black Quartz",
    "appears": "Yabbashah I 83-89"
  },
  {
    "gameId": "p3r",
    "race": "Hanged P",
    "level": 79,
    "name": "Genocidal Mercenary",
    "hp": 3333,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Genocidal_Mercenary_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rp",
      "pierce": "no",
      "fire": "no",
      "ice": "ab",
      "elec": "rp",
      "wind": "no",
      "light": "no",
      "dark": "rp",
      "almighty": "no"
    },
    "drops": "Dead Moon's Husk",
    "appears": "Adamah I 255"
  },
  {
    "gameId": "p3r",
    "race": "Hanged P",
    "level": 78,
    "name": "Hedonistic Sinner",
    "hp": 2739,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Hedonistic_Sinner_Model.png",
    "resistances": {
      "slash": "rp",
      "strike": "no",
      "pierce": "rp",
      "fire": "nu",
      "ice": "no",
      "elec": "ab",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ruby",
    "appears": "Adamah I 254"
  },
  {
    "gameId": "p3r",
    "race": "Hanged P",
    "level": 69,
    "name": "Minotaur Nulla",
    "hp": 2739,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Minotaur_Nulla_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "rp",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "nu",
      "wind": "no",
      "light": "rs",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Phoenix Tail",
    "appears": "Harabah II 225"
  },
  {
    "gameId": "p3r",
    "race": "Hanged P",
    "level": 62,
    "name": "Devious Maya B",
    "hp": 1000,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Devious_Maya_B_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rs",
      "pierce": "rs",
      "fire": "rs",
      "ice": "rs",
      "elec": "rs",
      "wind": "rs",
      "light": "rs",
      "dark": "rs",
      "almighty": "no"
    },
    "drops": "Mask of Sacrifice",
    "appears": "Harabah I P1"
  },
  {
    "gameId": "p3r",
    "race": "Hanged P",
    "level": 55,
    "name": "Minotaur II B",
    "hp": 2190,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Minotaur_II_B_Model.png",
    "resistances": {
      "slash": "rp",
      "strike": "rp",
      "pierce": "rp",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ver. II Restraints",
    "appears": "Tziah II P1"
  },
  {
    "gameId": "p3r",
    "race": "Hanged P",
    "level": 44,
    "name": "Jotun of Authority",
    "hp": 2150,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Jotun_of_Authority_Model.png",
    "resistances": {
      "slash": "ab",
      "strike": "no",
      "pierce": "no",
      "fire": "nu",
      "ice": "wk",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Quality Nihil Cloth",
    "appears": "Tziah I 136"
  },
  {
    "gameId": "p3r",
    "race": "Hanged P",
    "level": 44,
    "name": "Minotaur III B",
    "hp": 1797,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Minotaur_III_B_Model.png",
    "resistances": {
      "slash": "rs",
      "strike": "rp",
      "pierce": "rp",
      "fire": "wk",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Ver. III Restraints",
    "appears": "Tziah I D2"
  },
  {
    "gameId": "p3r",
    "race": "Hanged P",
    "level": 38,
    "name": "Chaos Cyclops B",
    "hp": 1201,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Chaos_Cyclops_B_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "nu",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "nu",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Cross of Order",
    "appears": "Yabbashah II D3"
  },
  {
    "gameId": "p3r",
    "race": "Hanged P",
    "level": 32,
    "name": "Deviant Convict",
    "hp": 1454,
    "mp": 999,
    "image": "https://megatenwiki.com/images/9/92/P3R_Deviant_Convict_Model.png",
    "resistances": {
      "slash": "no",
      "strike": "no",
      "pierce": "no",
      "fire": "no",
      "ice": "no",
      "elec": "no",
      "wind": "no",
      "light": "no",
      "dark": "no",
      "almighty": "no"
    },
    "drops": "Nihil Cloth",
    "appears": "Yabbashah I 90"
  }
]);