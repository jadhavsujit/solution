## Document: System Requirement Specification Document

## Title :
Online Feedback Portal

## Team:
Lab Faculty,Course Cordinator,project manager, developers, designers, testers,Education Stakeholders




## Objective(Purpose):
The online feedback portal of oraganization for students and faculty helps organization to progress in proper direction.It gives the scope for students to convey their messege to the organization.The positive feedback motivates the organization to continue their behaviours and negative feedback specifies what was wrong without being harsh so that organization know what and where to improve.



## Scope:
- This System allow user to submit feedback which provides us such as comments, suggestion, ratings ,reviews.

- The groups of users who will be able to access the portal, such as students, teachers, administrators, or other staff members.

- The features and functionality that the portal will include, such as the ability to submit feedback anonymously, the ability to track and respond to feedback.

## Definations:




## Functional Requirements:
- A Student can able to give their feedback by login on Feedback portal and Faculty can able to see feedback of student but not their personal details.
- A Organization can able to see a performance of their Faculties and told them where they can improve and become better in their skill.


### Student:
- Student can login on feedback portal.
- Students can see all faculties names.
- Students can submit rating according to faculties performance.

### Course Co-ordinator:
- Co-ordinator login credentials lead to dashboard.
- Co-ordinator can see all feedbacks which given by students.
- Co-odinator can approve all valid feedbacks and forbid invalid feedbacks.
- Co-ordinator will send all valid feedbacks to Trainer/Faculty.

### Trainer:
- Trainer login credentials lead to dash.
- Trainer can see feedbacks sent by Co-ordinator.
- Trainer has facility to respond genuine criticism and co-ordinate with Course Co-odinator.






## Non-Functional Requirements:
### Security:
- Only Registered Student, Course Co-ordinator, lab faculty, reviewer will get accessed through certain authentication process.
- System will provide access to the contents, components using login authorization (authorized login will already be created)(no create account but only forgot password)
- If the feedback system allows users to post comments or reviews, it's important to have a moderation process in place to ensure that inappropriate or offensive content is not published. So, feedback given by student would be hidden, only feedback text will be visible to reviewer. He (or) she will accept/reject the feedback
- As soon as trainer login securely with their credentials, he/she will noticed with notification that students have given them certain Evaluation which already segregated by reviewer and sensitive data will be always encrypted.
- System will internally maintain secure communication channel between servers
- system itself should be secure against attacks such as denial of service (DoS) attacks, which could disrupt the system and prevent users from accessing it.

### Reliability:



### Maintainability:




### Portability:



### Accessibility:
- system should be easy to use for all users, regardless of their abilities or disabilities. This may involve designing the system to be navigable using a keyboard, or providing clear and concise instructions on how to use the system.
- Only registered Students, Trainers, course co-ordinator, reviewer will be accessed after authentication.
- The language used in the feedback system should be clear and concise, and should be easy to understand for users with cognitive or language-based disabilities. Reviewer can reject or approve comments based on their reactions.
- Trainer will able to see their evaluation given by student.




### Durability:




### Efficiency:





### Modularity:
- Modularity refers to the degree to which the system is composed of independent or dependent, self-contained modules that perform specific functions. Modular systems are designed to be flexible, scalable, and easy to maintain, as they can be modified or replaced without affecting the overall operation of the system.
- By separating the system into distinct modules, the risk of failure can be reduced, as the failure of one module will not necessarily affect the operation of the entire system.
- Modular systems are easier to troubleshoot and repair, as the module responsible for a problem can be identified and replaced without disrupting the entire system.
- Overall, modularity can improve the performance, reliability, and flexibility of a feedback system, making it easier to maintain and adapt to changing needs.


### Scalability:




### Safety:




By considering these factors, we can ensure that our feedback system is accessible to all users.
