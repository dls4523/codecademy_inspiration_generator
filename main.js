import readline from 'readline';

const inspirationalQuotes = [
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      category: "Success"
    },
    {
      text: "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon",
      category: "Success"
    },
    {
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
      category: "Success"
    },
    {
      text: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller",
      category: "Success"
    },
    {
      text: "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
      category: "Success"
    },
    {
      text: "Action is the foundational key to all success.",
      author: "Pablo Picasso",
      category: "Success"
    },
    {
      text: "Success is not in what you have, but who you are.",
      author: "Bo Bennett",
      category: "Success"
    },
    {
      text: "Life is 10% what happens to you and 90% how you react to it.",
      author: "Charles R. Swindoll",
      category: "Personal Growth"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "Personal Growth"
    },
    {
      text: "Everything you've ever wanted is on the other side of fear.",
      author: "George Addair",
      category: "Personal Growth"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      category: "Personal Growth"
    },
    {
      text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Zig Ziglar",
      category: "Personal Growth"
    },
    {
      text: "Be not afraid of growing slowly; be afraid only of standing still.",
      author: "Chinese Proverb",
      category: "Personal Growth"
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
      category: "Perseverance"
    },
    {
      text: "Fall seven times and stand up eight.",
      author: "Japanese Proverb",
      category: "Perseverance"
    },
    {
      text: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
      category: "Perseverance"
    },
    {
      text: "Perseverance is not a long race; it is many short races one after the other.",
      author: "Walter Elliot",
      category: "Perseverance"
    },
    {
      text: "It always seems impossible until it's done.",
      author: "Nelson Mandela",
      category: "Perseverance"
    },
    {
      text: "The difference between a stumbling block and a stepping stone is how high you raise your foot.",
      author: "Benny Lewis",
      category: "Perseverance"
    },
    {
      text: "The only guarantee for failure is to stop trying.",
      author: "John C. Maxwell",
      category: "Perseverance"
    }
  ];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const categories = [... new Set(inspirationalQuotes.map(quote => quote.category))]

const promptMessage = `
Select a category number:
${categories.map((cat, index) => `${index + 1}. ${cat}`).join('\n')}
Enter number (or press Enter for random): `;

const getQuote = category => {
    if (category) {
        const categoryQuotes = inspirationalQuotes.filter(quote => 
            quote.category === category
        );
        
        if (categoryQuotes.length === 0) {
            console.log(`No quotes found for category: ${category}`);
            return;
        }

        const randomNum = Math.floor(Math.random() * categoryQuotes.length);
        const result = categoryQuotes[randomNum];
        
        printQuote(result);
    } else {
        const randomNum = Math.floor(Math.random() * inspirationalQuotes.length);
        const result = inspirationalQuotes[randomNum];
        
        printQuote(result);
    }
};


const printQuote = result => {
    console.log(`"${result.text}"`);
    console.log(`           - ${result.author}`);
};

rl.question(promptMessage, (answer) => {
    if (answer.trim() === '') {
        // User pressed Enter for random quote
        getQuote();
    } else {
        const selection = parseInt(answer) - 1;
        if (selection >= 0 && selection < categories.length) {
            getQuote(categories[selection]);
        } else {
            console.log('Invalid selection');
        }
    }
    rl.close();
});