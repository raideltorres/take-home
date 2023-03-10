# Take Home

## Setup

1. Install PNPM if needed `npm install -g pnpm`
2. Run `pnpm install`
3. Run `pnpm dev`
4. Visit http://127.0.0.1:5173/

## Tools

1. PNPM: `https://pnpm.io/`
2. Vite: `https://vitejs.dev/`
3. Redux Toolkit: `https://redux-toolkit.js.org/`

## Description and guide on the challenge

1. Provide the atomic design organization of the site.

   - First level: Here we have the atoms, which are the singular components.
   - Second level: Here we have the molecules, which are composed by a small amount of atoms.
   - Third level: Now we have the sections, here we have components which are the sum of multiple molecules and atoms.
   - Fourth level: And finally we have the layouts which are the page level components

2. The site should look something like the image above. No sign-in or sign-up actions are required.

   - Since the image was kind of different to what was described in the other requirements I created a home page to simulate the image design and the other pages to program the functionality.

3. Blog’s logo: A Simple component to render the blog's logo.

   - This one is an atom

4. Main menu: A list of the site sections.

   - This one is a molecule composed by multiple Links
   - About and contact pages are just routes with dummy text

5. Image hero component: Image component to render the site's hero image.

   - This one is also an atom

6. Search bar: Searches the list of posts by name and returns a list of the post-matching strings entered. It should be an Auto-complete component. When clicking on one element the corresponding blog post gets loaded on the page.

   - This one is a molecule composed by multiple atoms
   - I was going to create a fuzzy search, but at the end I just implemented an "include" approach on title and content fields. However the fuzzy approach is there, since we just need to remove the "'" in the selector.

7. Post-creation/edition component: No WYSIWYG required, simple HTML post formatted is ok.

   - To create a Post we need to go to the Blog page and it will bring a modal with the form. For now as requested I just added a title and a text area in which we can put basic html tags
   - Just to be sure I sanitized the print flow of this content.
   - Also added required validations to both fields.

8. Post-reading view page: Page to visualize the post's content.

   - If a post is selected from the Blog list or from the search results it will navigate to the post details page

9. Post creation page: Form enter/edit post-HTML content.

   - On the blog page we can create new Posts and inside the Post details page we can edit and delete posts.

10. Posts list: Page to visualize all of the blog posts.

    - This is Blog page

## Comments

In this challenge I was expecting to create a proper typography system among other things but was only able to dedicate a couple hours each day so never had time :) (sorry)
However I was able to make it fully responsive (but again, I was not able to follow mobile first approach) :)
I'm also in debt of test cases
