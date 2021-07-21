# Image Processing
Upload and Search Upload Images with tags ,description API's Nodejs

Features of API Should be:
1. The service has to be resilient (so that your customers don’t face downtimes).
2. performant (to meet SLAs with customers).
3. extensible (so that you don’t spend months rewriting later).


Your team needs to build a Stock Image Service and you’re just the man/woman for the job. The app will help stock image photographers hired by your team upload photos everyday to a central library. It will then be used by developers (your customers) to integrate stock image search into their applications. You’ll also have to build an internal UI client for the internal team to test out the features.

The service has to be resilient (so that your customers don’t face downtimes), performant (to meet SLAs with customers) and extensible (so that you don’t spend months rewriting later).

Requirements
You have to develop -

1. an Upload API
2. a Search API
3. Web app UI to consume these APIs for testing

Here are the requirements for UI and the APIs -

- UI will have two capabilities - Upload images and Search/View images. 
    Upload images
    - User should be able to select an image (JPEG/PNG) or multiple images at once or a directory containing image(s) by clicking a button. After selecting, they should able to add a description which can contain hashtags to each image (think of Instagram like descriptions when uploading an image). Descriptions can be empty as well. After this, clicking an upload button should call the Upload API to start uploading the image(s).
        The uploaded images can be of any aspect ratio between 9:16 and 16:9 with the shorter edge being at least 500px (shorter edge is the minimum of width or height).
    - Processing - Once uploaded, every image should go through these processing steps on the server -
        - Create two renditions of the image - one with a shorter edge of 240px and another with shorter edge of 720px.
            Example:
            A user uploads an image of size 1920px by 1080px (aspect ratio is 1920/1080 => 16:9), the app should generate two additional renditions for it:-
                - One with dimension 1280px by 720px (shorter edge is 720px, longer edge calculated by multiplying aspect ratio to 720)
                - One with dimension 426px by 240px (shorter edge is 240px, longer edge calculated by multiplying aspect ratio to 720) 
        - Fetch additional tags for the image - Call an API takes an image and returns a list of tags based on image content. The implementation of this API is beyond the scope of this assignment. For this purpose, you can create a function that returns 3 tags from a hardcoded set of 20 tags after a delay of 5 seconds (to simulate the API delay). These tags have to be stored along with the user provided tags for the image. Here is a list of dummy tags your function can use → [Interiors, Wallpapers, Experimental, People, Textures, Food, Spirituality, Wellness, Nature, Events, Culture, Architecture, Technology, Athletics, Work, History, Film, Animals, Travel, Fashion]
        The service should be able to process up to 20 images in parallel.
    - Once the above processing steps are done, the Upload API should return a response and the UI should convey that the upload is complete.
    - You should build your service so that it’s resilient. For instance, if the server process crashes, the processing of images should still continue without being interrupted. Also, if processing for one image causes a crash, it should not affect processing of other images running in parallel.
    Search/View Images
    - Image Grid - The page should have an image grid view with an ability to load more images by clicking a button. On page load, it should show the last 30 uploaded images in the descending order of upload time. 
        Each image in the grid should have the following info :-
            - Image thumbnail
            - Tags of the image
            - Image description
            - Upload date
    - Search - Above the image grid, there should be a search bar for the user to type in search queries and perform a search for matching images.
        - Search should be performed on the backend and exposed via an API.
        - Search queries can be by date, tags, description or a combination of these criteria.
        - Query syntax
            - `tag:cute,dog` - find images that have been tagged with either cute OR dog.
            - `date:20-03-2016` - find images uploaded on 20th March 2016.
            - `date:03-2016` - find images uploaded anytime in March 2016.
            - `date:2016` - find images uploaded during in the year 2016.
            - `date:20-*-2016` - find images uploaded on 20th of any month in the year 2016.
            - `date:20-03-*` - find images uploaded on 20th March of any year (maybe a yearly festival).
            - `from:20-03-2019` - find all images after the given date.
            - `to:20-05-2019` - find all images before the given date.
            - `from:20-03-2019 to:28-03-2019` - find images between the given date range.
            - `from:20-03-2019 to:28-03-2019 tag:cute,dog`  - find images between the given date range AND tagged with either cute OR dog.
            - `desc:Happy` - find all images that have the word “happy” in their description (excluding tags). Case in-sensitive.
            - `desc:"Berlin wall"` - Also support quotes to search for phrases with spaces in them. Case in-sensitive.

Constraints:

- Service has to be accessible over HTTP(S). UI has to be web-based and accessible from any standard desktop browser.
- You must the solve the problem in NodeJS or Python.
- For the backend, you can use lightweight frameworks (like Express in Node.js) but avoid full-featured application frameworks like Django. We’re really interested in how you’re able to implement these features by breaking down the problem and solving it with your own code (with some helper libraries).
- For data storage, use an RDBMS (like Mysql or Postgres). We’re very interested in knowing how you leverage RDBMS to solve such a problem without outsourcing the problem to something like Elasticsearch.
- For the frontend, go nuts with any frameworks/component libraries you prefer.

Submission:
You are to share the following:

- Code for the assignment. A zip works. Or a private github/bitbucket repo url (the code should not be made public).
- Share the url to access the running UI. Protect this with a password and share the password with us.
- A document (Google doc or even plain text file) explaining your thought process, like what considerations did you have, what trade-offs you decided to make and other solutions you could think off (which are not implemented). 
    It should be at least 1 page. But don’t be hesitate to rain down a 5-pager upon us if you have more to say.
