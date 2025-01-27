  Profile Card component . The component includes the following features:

1. Avatar: Displays  profile image.
2. Name: Shows the user's name.
3. Email: Displays the user's email .
4. Follow Button: Toggles between "Follow" and "Following" states when clicked. 

The app is styled with StyleSheet for a clean and responsive layout,  LinearGradient for a gradient background.

---


App Structure

1. Navigation:  
   The app uses React Navigation to display a "Profile" screen containing the Profile Card component.

2. Profile Component:  
   This is the main screen that contains the ProfileBody component. It wraps the content in a gradient background using the LinearGradient component.

3. ProfileBody :  
   - Displays the user's name, avatar, and  (posts, followers, following). 
   - Includes a "Follow" button with a state that toggles between:
     - Follow": When the user is not following.
     - Following: When the user is following.
   - Clicking the button changes the state and updates the button's color and text.

4. Modal Dropdown:  
   When the "Following" button is clicked, a modal dropdown appears with three options:
   - Send Message
   - Unfollow
   - Block
