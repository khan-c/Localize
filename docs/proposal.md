# Localize

### Localize is a project to bring local and big businesses together to grow as a community. 

# Background and Overview

New businesses are moving in and growing. Neighborhoods are changing. Managing the growth and change of a neighborhood while keeping the character and soul of what made that area special is difficult. Localize provides the means to have that conversation. We have created a space for larger businesses to connect with smaller, local businesses for their specific needs. 

# Functionality & MVP
   - [ ] Users will be able to search for businesses
     - [ ] Google Maps API will show location
     - [ ] Yelp API will provide seed data 
     - [ ] May filter by category 
   - [ ] Users will be able to signup for an account and link their profile to an existing business
     - [ ] May create a new business if it doesn't already exist 
   - [ ] Companies can send an email to other companies to discuss specifics 
     - [ ] Users can easily select a date from a calendar 
   - [ ] Company show page will provide information about the company 
   - [ ] Companies will be able to upload photos
   - [ ] Companies can leave reviews

#### Bonus Features
   - [ ] News feed/blog of testimonials 
   - [ ] Direct Messages between companies 

# Technologies & Technical Challenges
|   |   |
|-------|-------|
| Backend| Node (v8.9.0)/Express.js(v4.16.2) |
| Database| MongoDB (v3.6.0) with Mongoose |
| Frontend| React/Redux - JavaScript|
| APIs| Yelp, Google Maps, Google Calendar |
| Media Hosting | Amazon Web Services (S3) |

#### Media Hosting 
  + ##### Configuration with AWS 
    + We have someone who has hosted AWS on Rails and someone who has used Node before.

#### A lot of APIs
  + ##### Utilizing APIs and getting the information to work together 
    - Correctly utilizing the various APIs and making sure they all work together will be difficult 
    
# Project Wireframes and Component Heirarchy 

![Wireframes](https://github.com/khan-c/flex/blob/master/docs/Wireframes_Components.pdf)

# Accomplished over the Weekend
 - Completed Wireframes, project proposal, components, and design of the website
 - Design Standards created 
 - Researched Node.js, Express.js, and MongoDb /Mongoose 
 - Researched Yelp API 
 - Researched Google Maps API 
 - Researched configuring AWS with Node.js 
 - Begin backend setup and configuration 
 - Routes and Schema broken down 

# Group Members & Work Breakdown

| Group | Email |
|-------|-------|
|**Kyle Chen** | kylehchen@gmail.com |
|**Truong Nguyen** | tmnguyen12@gmail.com|
|**Angel Velasco** | avelasco920@gmail.com|

We plan to touch base at least twice a day (in the morning and at after class) to make sure we're on schedule, to share knowldge learned, and to adjust our timeline as needed. 

### Day 1
  - Kyle 
    - Complete Backend setup (Node/Express)
    - Begin Auth 
  - Truong 
    - Begin writing API calls for Yelp 
  - Angel 
    - Complete Wireframes for the signup pages
    - Setup CSS Files and inline stylesheets

### Day 2
 - Kyle 
    - Complete Auth
    - Begin Main page and signup forms
  - Truong 
    - Complete Yelp API front + backend build  
  - Angel 
    - Complete navbar 

### Day 3
- Kyle 
  - Begin AWS setup 
  - Continue Main page + Signup Forms 
- Truong 
  - Begin working on Search page
  - Begin writing Google Maps API calls
- Angel 
  - Begin company page 

### Day 4
- Kyle
  - Complete AWS Setup
  - Complete Photo upload and display 
- Truong
  - Begin Photo Carousel 
- Angel 
  - Begin writing Google Calendar API calls 
  - Complete Message forms for emails 

### Day 5
- Cleanup final touches 
- Everyone helps other teammates complete MVPs


### Day 6
 - Copy for mission statement, testimonials, about us, pictures, art 


