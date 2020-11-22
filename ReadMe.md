
### Team
Isaiah Ballah (full-stack), Will Hutchinson (full-stack), Evan Hutnik (back-end), Aras Siddiqui (designer).

### Inspiration

Bullying has always been a big issue in schools, and unfortunately this issue has carried over into today’s world of online learning. While teachers try their best, they can’t be everywhere and hear everything that goes on in their online classrooms. One of our group members has a younger sibling that has been directly affected by in-class cyberbullying which gave us the motivation to pursue this idea.

### What it does

Our project notifies educators of any hurtful or harassing messages sent during their online lectures. After each class finishes, teachers are sent an email detailing text and audio communications that were flagged by our software, which they are able to review, playback, and save in our user interface. They also have the ability to escalate messages to colleagues like vice principals if they feel disciplinary action is necessary.

### How we built it

We started off with brainstorming ideas and making a quick low-fed mockup. We discussed the key features we wanted it to have and made some wireframes as a proof of concept. This was based of different software's already used in education. This is so the teachers are familiar with the UI. Then we did our High Fidelity in Adobe XD.

Our software consists of two main parts, a backend and a user interface. Our backend performs sentiment analysis on messages from the teachers online classroom using machine learning algorithms. It then stores the messages that score above a threshold in a database for the teacher to review. Once processing of the messages has been completed, an email is sent to the instructor with a summary of the analysis as well as a link to view any flagged messages from that day’s lecture.

In the user interface the teacher has the ability to review, playback, and save flagged messages for each of their classes. The student’s home phone number and an option to send the message to a superior are readily available if they feel the need to take further action

### Challenges we ran into

While our group has a large amount of technical experience, the complexity of the software prevented us from implementing all of the functionality that we initially planned to with the time given. Some of our team members had never used Node before to create a backend, so there was a learning curve to get familiar with it.

### Accomplishments that we're proud of

When we started this project we set out to create something that could make an impact on the issue of cyberbullying in online classes. We truly feel like this software is an effective tool to curb this issue, and we are proud of the functionality implemented. Our backend seamlessly communicates with Google Cloud's Natural Language API to perform sentiment analysis and delivers the relevant results to the database for use by the user interface, and our frontend is both clearly laid out and functional.

The dashboard has a resources tab that displays cyberbullying resources for teachers from Telus Wise.
