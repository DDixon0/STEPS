# STEPS
## Kevin V, Denzell D, Boubacar D

### Overview
Steps is a website application to connect young adults and with mentors. These trusted mentors will be able to teach, advise and help their mentees through our chat and video call services. It will change their lives and push them on the right path. Our services will allow these young adults to take those important first steps toward becoming mature adults.                                          

### User Stories & User Cases
* As a non registered user, you can view a slideshow of mentors, mentees and success stories.
* As a non registered user, you can sign up to make an account with the site as a mentor or student.
* As a registered user, you can log into the site.
* As a registered user, you can fill out a connection form to pair you with a mentor, or a mentee.
* After some time, you can choose to connect to a specific mentor/mentee.
* As a registered mentor you can choose if you want to connect with a mentee.
* A registered mentee, you can msg, video call or set appointments with a mentor.

### Data Model
```
user {
  username: string,
  email: string,
  id: // a unique identifier (long int),
  status: // a string of type ‘mentor’ or ‘mentee’,
  rating: // int,
  interests: // [string 	`of type ‘education,’ ‘tech,’ ...],
  location: // lat-long,
  education: // string
}
```

### APIs
* Google Calendar -https://developers.google.com/api-client-library/javascript/start/start-js
* Firebase Api-https://firebase.google.com/docs/auth/
* Video Chat-https://dev.skype.com/webcontrol
* Google Maps- https://developers.google.com/maps/documentation/javascript/tutorial

### Division of Labor
CSS/HTML -> B
Firebase Auth + Database -> D
Integrating APIs -> K

### Design ResourcesColor
* Palette
  * https://coolors.co/99d3df-88bbd6-cdcdcd-89e9e9-edfeff
