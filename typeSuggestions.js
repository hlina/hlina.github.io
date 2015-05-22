(function() {

  $(document).ready(function() {
    $(".display").hide();
    var triePromise = 
    	Promise.resolve(new Trie(['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP']));

    var app = new AppView($('#app'), $('#item-template').html(), triePromise);    
    var country;
    var lat;
    var lng;
    var description;
    var nickname;

    $("#submit").click(function(event) {
      event.preventDefault();
      $('.inner').hide();
      var type = $('#input').val();  
      console.log(type);
      //upon submission of search, match the search input with a personality type
      switch(type.toUpperCase()) {
        case "ENFJ":
            country = "Belgium";
            nickname = "ENFJ: The Mentor";
            description = "ENFJ’s are charming, self-confident, honest and sensitive and have a knack for being able to ‘read’ people.  They tend to place the needs of others before their own and feel happiest when helping or nurturing people.  They’re generous, extremely social and place a high value on their personal relationships.  They can also be sensitive to criticism and because they tend to see everything from a human angle, are not good at working strictly with facts and figures.";
            lat = 50.8500;
            lng = 4.3500;
            break;
        case "ENTJ":
          country = "France";
          nickname = "ENTJ: The Executive";
          description = "ENTJ’s are confident, opinionated, competitive, ambitious and analytical, which is what makes them ideal personalities for leadership roles.  They have a natural ability to absorb and analyze large amounts of information and then make quick, often accurate assessments.  They have a low tolerance for inefficiency or for people who don’t share their same perspective.  Sometimes they can come across as overbearing or aggressive but they genuinely love people, are excellent conversationalists and can be quite sentimental at times.";
          lat = 47.0000;
          lng = 2.0000;
            break;
        case "ENTP":
          country = "Lithuania";
          nickname = "ENTP: The Visionary";
          description = "ENTP’s are quick-thinkers and love to debate.  They love to analyze ideas and are constantly in search of ways to improve the world they live in.  They’re resourceful, extremely clever, innovative and curious which makes them great entrepreneurs, inventors or lawyers.  They’re quick to assess a situation, recognize a pattern and then come up with a solution.  But sometimes this logical approach to decision-making can cause ENTP’s to overlook the human-side of the equation and hurt people’s feelings.";
          lat = 55.0000;
          lng = 24.0000;
          break;    
        case "ENFP":
            country = "Brazil";
            nickname = "ENFP – The Advocate";
            description = "You could say that ENFP’s are in love with life.  They’re enthusiastic, optimistic idealistic risk-takers who possess a zest and excitement for all of the possibilities life has to offer.  They’re easily bored by routine and tasks that require attention to detail and have trouble with task-completion.  They prefer the planning-stages of projects.  While they’re warm and personable and talented at motivating and inspiring people to action, they can also fall into the trap of idolizing others, which can lead to disappointment when that person or situation doesn’t live up to their expectations.  They’re skilled at seeing multiple possibilities and this, combined with their need for excitement and change, can make it difficult for ENFP’s to remain in relationships.  They often have numerous careers in their lifetimes, which can sometimes cause people to see ENFP’s as aimless or scattered.  But they’re very values-driven and are on a constant quest to find meaning in their lives as well as inner peace.  ENFP’s are excellent verbal communicators and in the hands of a manipulative ENFP, this skill can be used to con or deceive people.   But due to ENFP’s highly-evolved value systems, this is a rare occurrence.";
            lat = -15.7833;
            lng = -47.8667;
          break;
        case "ESFJ":
            country = "Canada";
            nickname = "ESFJ – The Caregiver";
            description = "ESFJ take things quite literally and base decisions on concrete facts.  They’re warm-hearted, conscientious and responsible.  They frequently place the needs of others before their own.  They excel at activities that require an eye for detail and thrive in structured, controlled environments.  They dislike uncertainty and prefer to live a life steeped in the traditions upheld by their communities.  They desire acceptance and praise from others and although ESFJ’s can be generous, they give with an expectation of receiving acknowledgement in return.  They are sensitive and tend to get their feelings hurt quite easily, but this sensitivity is also what makes them exceptionally good at bringing the best out in people.";
            lat = 45.4000;
            lng = -75.6667;
            break;
        case "ESTJ":
            country = "USA";
            nickname = "ESTJ - The Overseer";
            description = "Practical, straight-forward, honest and task-focused, ESTJ’s are natural-born leaders.  They love to take charge and are skilled at planning and implementing new ideas.  They’re fondness for rules and procedures, however, can sometimes lead people to see them as insensitive, especially because they tend to apply logic and reason to situations where other people’s feelings are involved.  They’re self-confident and aggressive and have strong convictions and beliefs about the world, which, if they aren’t careful, can sometimes lead them to becoming too critical, rigid and narrow-minded.  Outgoing and outspoken, they’re friendly and fun to be around and strive to create a secure and tradition-based environment for themselves and their families.  Some psychologists have speculated that George W. Bush is an EST";
            lat = 38.8833;
            lng = -77.0167;
            break;
        case "ESTP":
            country = "Australia";
            nickname = "ESTP - The Doer";
            description = "ESTP personality types always have an impact on their immediate surroundings - the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, ESTP personalities love to be the center of attention. If an audience member is asked to come on stage, ESTPs volunteer - or volunteer a shy friend. ESTPs keep their conversation energetic, with a good dose of intelligence, but they like to talk about what is - or better yet, to just go out and do it. ESTPs leap before they look, fixing their mistakes as they go, rather than sitting idle, preparing contingencies and escape clauses.";
            lat = -35.3080;
            lng = 149.1245;
          break;    
        case "ESFP":
            country = "Mexico";
            nickname = "ESFP - The Entertainer";
            description = " ESFP’s are spontaneous, optimistic and enjoy being the center of attention.  They’re also out-going, social and crave excitement.  An ESFP is a true ’people-person’ and dislikes being alone.  Although ESFP’s prefer to avoid activities that require analytical or theoretical thinking, they have a practical side that make them skilled problem-solvers.";
            lat = 19.0000;
            lng = -99.1333;
          break;
        case "INFJ":
            country = "Switzerland";
            nickname = "INFJ: The Protector";
            description = "INFJs indeed share a very unique combination of traits: though soft-spoken, they have very strong opinions and will fight tirelessly for an idea they believe in. They are decisive and strong-willed, but will rarely use that energy for personal gain – INFJs will act with creativity, imagination, conviction and sensitivity not to create advantage, but to create balance. Egalitarianism and karma are very attractive ideas to INFJs, and they tend to believe that nothing would help the world so much as using love and compassion to soften the hearts of tyrants.";
            lat = 46.8333;
            lng = 8.3333;
            break;
        case "INTJ":
            country = "Germany";
            nickname = "INTJ: The Scientist";
            description = "With a natural thirst for knowledge that shows itself early in life, INTJs are often given the title of \"bookworm\" as children. While this may be intended as an insult by their peers, they more than likely identify with it and are even proud of it, greatly enjoying their broad and deep body of knowledge. INTJs enjoy sharing what they know as well, confident in their mastery of their chosen subjects, but owing to their Intuitive (N) and Judging (J) traits, they prefer to design and execute a brilliant plan within their field rather than share opinions on \"uninteresting\" distractions like gossip.";
            lat = 52.5167; 
            lng = 13.3833;
            break;
        case "INTP":
            country = "India";
            nickname = "INTP: The Thinker";
            description = "They love patterns, and spotting discrepancies between statements could almost be described as a hobby, making it a bad idea to lie to an INTP. This makes it ironic that INTPs' word should always be taken with a grain of salt - it's not that they are dishonest, but people with the INTP personality type tend to share thoughts that are not fully developed, using others as a sounding board for ideas and theories in a debate against themselves rather than as actual conversation partners.";
            lat = 21.0000;
            lng = 78.0000;
            break;    
        case "INFP":
            country = "Finland";
            nickname = "INFP – The Dreamer";
            description = " INFP’s easily adapt to new situations and are flexible and laid-back.  That is, until a value they hold dear is challenged, then they can become quite aggressive.  They’re loyal, reflective, idealistic and creative with a highly-developed skill for the written language.  They never lose their sense of wonder and are curious and keen observers, with an intense desire to understand and help others.  They don’t place high importance in the mundane details of every day life and are at their best when allowed to devote themselves fully to a cause or activity that they feel passionate about.  INFP’s are perfectionists and this can make it difficult for them to see the value in their own accomplishments.";
            lat = 64.0000;
            lng = 26.0000;
            break;
        case "ISFJ":
            country = "South Korea";
            nickname = "ISFJ – The Defender";
            description = "ISFJ’s are traditional and kind-hearted and place emphasis on maintaining a harmonious and cooperative living environment.  Their loyalty, observation skills, sensitivity and hyper-vigilance is what has earned this personality type the title of “Defender”. ISFJ’s have rich inner worlds but tend to shy away from expressing their feelings.  This can lead to frustration or depression if they don’t have an outlet for their intense emotions.  They’re very sensitive to criticism and can be very hard on themselves when they make mistakes.  They also have a difficult time saying ‘no’ to people. ISFJ’s take their responsibilities very seriously and for this reason, are very dependable.  They have excellent memories and are detail-oriented.  But perhaps their best trait is their sensitivity to the feelings of others and ability to always see the best in people.  Mother Theresa was said to have been an ISFJ.";
            lat = 37.5500;
            lng = 126.9667;
            break;
        case "ISTJ":
            country = "Singapore";
            nickname = "ISTJ - The Duty Fulfiller";
            description = "ISTJ’s possess a strong understanding of the differences between right and wrong.  They are extremely thorough and once they’ve begun a project, they won’t feel satisfied until they’ve successfully completed it.  They are serious, quiet, goal-oriented and extremely focused.  They can concentrate for long periods of time and are generally successful at anything they put their mind to.  Although very responsible and dependable, among friends, ISTJ’s have been known to have an an odd sense of humor.  They are loyal friends and believe above all else, in organization and in upholding traditions.  George Washington is thought to have been an ISTJ.";
            lat = 1.3000;
            lng = 103.8000;
            break;
        case "ISTP":
            country = "Austria";
            nickname = "ISTP - The Mechanic";
            description = "ISFPs live in a colorful, sensual world, inspired by connections with people and ideas. ISFP personalities take joy in reinterpreting these connections, reinventing and experimenting with both themselves and new perspectives. No other type explores and experiments in this way more. This creates a sense of spontaneity, making ISFPs seem unpredictable, even to their close friends and loved ones.";
            lat = 48.2000;
            lng = 16.3500;
            break;    
        case "ISFP":
            country = "Italy";
            nickname = "ISFP - The Artist";
            description = "Extremely creative and with highly-developed senses, ISFP’s make great artists.  Independent, quiet and often private people, ISFP’s can be difficult to get to know.  But ISFP’s are caring, sensitive individuals and very loyal friends.";
            lat = 41.9000;
            lng = 12.4833;
            break;
        default:
            nickname = "Search again. You didn't search a valid personality type."
        }
        $(".display").html("<div id=\"map\"></div>");
        $(".display").show();

        //add type description and name
        $(".display").append("<p id = \"title\">"+nickname+"</p>");
        $(".display").append("<p id = \"descrip\">"+description+"</p>");
        $(".display").append("<p id = \"descrip\"> Refresh the page to search again. </p>");

        //create the Leaflet map to display
        var map = L.map('map').setView([lat, lng], 3);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/examples.map-i87786ca/{z}/{x}/{y}.png', {
           attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 15
        }).addTo(map);
        var marker = L.marker([lat, lng]).addTo(map);
        var name = "You are "+country+"!";
        var colored = name.fontcolor("black");
        marker.bindPopup(colored).openPopup();
      });
  });
}());