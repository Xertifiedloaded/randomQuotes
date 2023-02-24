let generate = document.querySelector("#generate")
let quotesAuthor = document.querySelector("#quote")
let authorsQuote = document.querySelector("#author")
generate.addEventListener("click", () => {
    generate();
});

generate = () => {
    var quotes = {
        "- Nelson Mandela": 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        "- Steve Jobs": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
        "- Oprah Winfrey": "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
        "- Unknown": 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
        "- Makinde Olaitan": 'Nothing is impossible to a willing mind.',
        "- Adeniyi Isiah": 'Dont go broke trying to look rich',
        "- Makinde Olaitan": 'Teachers never gave a fuck they was paid to show up and leave.',
        "- Makinde Olaitan": 'Strive not to be a success, but rather to be of value.',
        "- Florence Nightingale": 'I attribute my success to this: I never gave or took any excuse.',
        "- Makinde Olaitan": 'keep umbrellas for the days it  get stormy.',
        "- Babe Ruth": 'Every strike brings me closer to the next home run.',
        "- John Lennon": 'Life is what happens to you while you’re busy making other plans.',
        "- Earl Nightingale": 'We become what we think about.',
        "- Mark Twain": 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.',
        "- Charles Swindoll": 'Life is 10% what happens to me and 90% of how I react to it.',
        "- Buddah": 'The mind is everything. What you think you become.',
        "- Chinese Proverb": 'The best time to plant a tree was 20 years ago. The second best time is now.',
        "- Woody Allen": 'Eighty percent of success is showing up.',
        "- Steve Jobs": 'Your time is limited, so don’t waste it living someone else’s life.',
        "- Vince Lombardi": 'Winning isn’t everything, but wanting to win is.',
        "- Stephen Covey": 'I am not a product of my circumstances. I am a product of my decisions. ',
        "- Christopher Columbus": 'You can never cross the ocean until you have the courage to lose sight of the shore.',
        "- Maya Angelou": 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ',
        "- Jim Rohn": 'Either you run the day, or the day runs you.',
        "- Henry Ford": 'Whether you think you can or you think you can’t, you’re right.',
        "- Frank Sinatra": 'The best revenge is massive success.',
        "- Zig Ziglar": 'People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.',
        "- Aristotle": 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing',
        "- Jesus": 'Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.',
        "- Ralph Waldo Emerson": 'The only person you are destined to become is the person you decide to be.',
        "- Henry David Thoreau": 'Go confidently in the direction of your dreams.  Live the life you have imagined.',
        "- Erma Bombeck": 'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.',
        "- Booker T. Washington": 'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.'
    };

    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author]

    quotesAuthor.textContent = quote;
    authorsQuote.textContent = author;


}