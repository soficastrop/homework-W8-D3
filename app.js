// Global post-component for blog posts with profile overlay
Vue.component('post-component', {
    props: ['post'],
    data: function() {
      return {
        profilePic: 'images/profile.png',
        showProfile: false
      };
    },
    methods: {
      openProfile: function() {
        this.showProfile = true;
      },
      closeProfile: function() {
        this.showProfile = false;
      }
    },
    template: `
      <div class="post">
        <div>
          <img :src="profilePic" alt="Profile Picture" class="profile-pic" @click="openProfile" />
          <span class="author">{{ post.author }}</span> —
          <span class="date">{{ post.date }}</span>
          <span class="reply">REPLY</span>
        </div>
        <p>{{ post.text }}</p>
        <div class="overlay-background" v-if="showProfile">
          <div class="overlay-box">
            <button class="close-button" @click="closeProfile">x</button>
            <h3>{{ post.author }}</h3>
            <p><strong>Foodie Level:</strong> {{ post.foodieLevel }}</p>
            <p>{{ post.bio }}</p>
          </div>
        </div>
      </div>
    `
  });
  
  // Local navigation component used in the header
  var NavComponent = {
    template: `
      <nav>
        <ul class="nav">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Recipes</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Lifestyles</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Videos</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        </ul>
      </nav>
    `
  };
  
  // Global component for the white chicken chili image
  Vue.component('chili-image', {
    template: `
      <div>
        <img src="images/chili.jpg" alt="White Chicken Chili" class="img-fluid" width="180">
      </div>
    `
  });
  
  // Create the Vue instance and register the local component
  new Vue({
    el: '#app',
    components: {
      'nav-component': NavComponent
    },
    data: {
      posts: [
        {
          author: 'Brianna',
          date: 'February 18, 2021 @ 3:30 pm',
          text: `Was amazing! My Walmart didn’t have coriander in stock and didn't have ground cumin. I used serrano instead of jalapeño. It was just like my favorite torilla soup from BJs. Iam sending this recipie to my family. 
                 I want everyone to try it!`,
          foodieLevel: 'Novice',
          bio: `Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!`
        },
        {
          author: 'LINH',
          date: 'February 15, 2021 @ 9:46 am',
          text: `I just made this soup today and it’s so tasty! I didn't have corn at home but still turned out very good. It's a winner! 
                 Thank you Lisa!`,
          foodieLevel: 'Newcomer',
          bio: `Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.`
        },
        {
          author: 'CATHERINE LEONARDO',
          date: 'February 13, 2021 @ 12:58 pm',
          text: `I LOVE this White Chicken Chili! You are right... 
                 Will be an all-time favorite, for sure.`,
          foodieLevel: 'Mentor',
          bio: `I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!`
        },
        {
          author: 'KALI',
          date: 'February 13, 2021 @ 11:31 am',
          text: `This recipe is dynamite! My partner usually won’t eat beans... 
                 Thanks so much, Lisa!`,
          foodieLevel: 'Novice',
          bio: `Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!`
        }
      ]
    }
  });
  