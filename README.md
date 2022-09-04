<img src="https://hct.ac.ae/wp-content/themes/HCTtheme/assets/images/logo.svg" alt="HCT Logo" width="400" height="124">

# Final Year Project
# _Universities Registration System_
**By Mohammed, Bineid**

_Project Supervisor: Dr. Madeleine Togher_

## Glossary
-	HTA – Hierarchical Task Analysis, describes an activity in terms of its specific goals, subgoals, operations, and plans.
-	UI – User Interface, the point of human-computer interaction and communication in a device.
-	UX – User Experience.
-	ERD – Entity Relationship Diagram, is a graphical representation that depicts relationships among people, objects, places, concepts or events within a system.
-	OOP – Object-oriented programming, “refers to computer programming model that organizes software design around data, or objects, rather than functions and logic”.
-	Framework – a tool that provides ready-made components or solutions that are customized in order to speed up development such as Node.js.
-	MVC – Model-View-Controller, a design pattern used to achieve separation of concerns.
-	IDE – Integrated Development Environment.

## Chapter 1: Introduction
### 1.1	Context and motivation
When I was a second-year student trying to register my courses, I was having many problems, such as what course should I register for? How many courses can I take? Am I allowed to take this course? Because of these questions, I was forced to ask my advisor. This process is repeated every semester and most students face these problems. Therefore, the inspiration and the whole idea came from the beginning of the problem. The main reason why we started this project is that there was a problem that the collage did not solve yet. As a team, we are motivated by our passion for making something useful for the long term and to know our limits and skills. Thus, we have this project idea where we plan on finding solutions to these problems by utilizing smarter solutions such as Internet of things (IoT) to improve the efficiency, enhance the system, optimize the parking utilization, reduce cost and time when using the parking system or even managing it. This project will focus on solving the problems one by one, along with having additional features included to furthermore enhance the user’s experience


### 2.2	Problem statement
In every semester we are facing a problem with lack/surplus of classes due to having unbalanced number of lecturer and students. In 2020 fall semester, SMC student had a math course “Applied Mathematics” registered in his schedule. The problem is the system only allowing 10 students as minimum and they were 8 students only, but the registration system already accepted it and submit the request. Therefore, the lecturer cancels the course and who had 4 courses left with 3 courses which leads to more academic issues. The thought of doing this whole project was to solve this type of a problem and catch irregular behavior in the registration system.
To summarize our problem with the current registration system:
-	The main problem is having lack/surplus number of classes.
-	The system is not counting the number of students in every course and because of that we don’t know how many classes we need for every course.
-	The system is slow and freezes sometimes. 
-	Time: The process itself is bad and slow because there are too many people involved therefore, we need to make it auto-register or at least reduce the number of interactions between students, advisors, and others.
-	Human error: for example, register for courses for another major.
-	Lack of feedback: student (user) should get Immediate feedback on their actions for example: when they register/drop to a course or not met the minimum credit.

### 1.3	Project objectives
HCT registration system is a system that provides and manages college courses. Their goal is to provide a fast, secure, and easier way to register courses to students across all HCT campuses. 
HCT registration system providing a lot of services for student such as: Prepare for Registration, Register for Classes, Plan Ahead, Browse, View Registration Information, Browse Course Catalog.
The above services work efficiently but it is missing some important features/services. One of these features is having a lack/surplus of classes due to having unbalanced number of lecturer and students. Currently system is not counting and dividing the classes based on the number of student and lecturer. This problem would affect every stakeholder (Students, Lecturers, Advisors, Supervisors, Administrations) in a separate way. For students, this will affect them by having the minimum/maximum number of credits, for ex. If a student had 4 courses and then they decided to cancel his 4th course, then he will stick with 3 course which will leave him with 9 credits, and this is not allowed due to HCT regulations. For Lecturers, the system will keep adding/dropping courses from their schedule, and this will confuse the lecturers. As an advisor, the students will ask the advisor frequently to send a request to the administrations to open/add new courses which will lead to consume more unneeded effort and time to the advisor. As a supervisor, he will have to check for the number of registered students in each course to open classes manually which leading to a lot of human errors. For administrations, they will have to deal with the massive number of courses requests that are coming from the supervisors.
### Solution
Our solution to this problem will be create a new feature/service that will count the needed classes numbers based on the student courses registration. This solution will solve a lot of problems that we have talked about previously. It will help the students to get enough classes in every semester. Lecturers can be prepared before the semester starts. It will save a lot of time and effort on advisors. As a supervisor, she/he will have enough data to decide the classes number. Eventually, administration will know the number of classes, budgets, and lecturers needed in every semester. This solution will benefit HCT organization in every aspect, from the financial to the operational processes. We believe that it will lead to less human errors and will add a high value to HCT registration system effectively.

## Chapter 2: Domain related Concepts and Systems
### 2.1	Introduction
The first and foremost purpose of the assignment was to test and analyze the whole system that how it going to be built and how it’s going to fulfill the requirements of the institution. The analysis and design part provides a comprehensive idea about the view that how the system will look after the completion and how it will get, store and transfer the data and also gives an idea about the data processing inside the system. The system analysis part will provide the cost idea and also provide the UML model of this system so, it would be easy for the developers to read this document and start the development process step by step. The edge system analysis provides us is that it enables us to decrease the risks and deal will all the sensitive components efficiently. 



### 2.2	Adopted Methodology
As we know that the system is for a Higher College have clear requirements about new system, each and every term associated with the system is well defined and well explained that shows that the requirements of the system are very clear and understandable, due to the reason we choose to use the waterfall methodology for this project. Waterfall methodology is very basic software development methodology which were being use over the decades for software development and system development. 
We have some advantages of this model, due to these advantages many of the organization still using this model on and off for their projects.

- I.	Easy to understand:
This is sequential and hierarchal model thus easy to understand for people within the team and outside the team like clients. It provides a complete life cycle for controlling and organizing software development projects.

- II.	Focus on goal:
Every team whether they are part of development team or part of design team, every person has a common goal to complete this project. They share common goal and stay stick on one point to complete their work in assigned time frame as in shown in `Figure 1`.



- III.	Coordination between teams:
This development model allows departmentalization and managerial controls. They focus to coordinate with each team and provide a specific time frame to each of them to complete their work on time. In this model team’s coordination is easy when a design team finish their work and complete design phase, they handover all the material to development team to start coding the design.

![Figure 1](https://user-images.githubusercontent.com/56771415/188312468-081a10d2-95d0-4cb8-a927-7602ff966154.png)

Where the requirements of a system are not subject to change, we use waterfall methodology as this development methodologies gives us a clear roadmap and help us to focus on our goal. We are using waterfall for the project because it allows the owner to have control over system development team and system development progress can be access easily.



### 2.3	Technical feasibility / Literature Review
In September 2020, SMC student had a course registered in his schedule with 12 credits. The problem is the system only allowing 10 students as minimum and they were 8 students only and the registration system already accepted it and submit the request. Therefore, the lecturer cancels the course and who had 4 courses left with 3 courses. Therefore, the lecturer cancels the course and who had 4 courses left with 3 courses. This problem leads to more academic issues. After discovering this problem, we read several pieces of literature about course registration systems.
One of the literatures Ruben Estevez, S. R. (2013) found or mentions in his research that there are actually some researchers who built an auto-registered system in which they used "genetic algorithms to generate satisfactory schedules" and found that the algorithms reduced the time needed to create course schedules, and the resulting schedules satisfy instructors. There are also other researchers who have built a system using wireless application protocol which enables the student to register over mobile but still requires the presence of students on campus. However, the problem is none of them mention how the user feels about for example: "the usability of course, registration systems. Can users learn to use a course registration system easily? Can they use it properly? Are they satisfied with the system?".

(LI, Y. ,2017) wrote a paper about Add-on Course Registration System and he/she talk about the problems, business component, technology component, Disadvantages and advantageous but he/she mention one feature about the system that I think it’s important and it will add a lot to our system which is Provide Course Recommendation Ranking and Reviews for example: student can tell how many credit he/she need to complete and what courses they have not scheduled for yet. Also, there is another paper written by Qurban A. Memon, M. S. (2005) about a similar feature called course priority, which suggests what course student should add or prioritize first.

Y. Peng, N. Liu, Y. Li and Z. Shao paper he says that the online course registration system is a critical component of the educational administration system, which includes registration guidance, registration control, undergraduate and graduate course registration, retaking and retesting, dropping a course in the middle of the semester, and information exchange, among other things. In April 2009, Tsinghua University's new course registration system became live. After implementing he found the new system enhanced the registration procedure, established common course registration for undergraduate and graduate students, and supported instructional activities across the spring, summer, and autumn semesters by allowing students to register for courses willingly. This article discusses the new online course registration system's design and execution, including the registration method, technical architecture, and system design.

Also, Parthiban, K; Nataraj, R. V says Each program has its requirements. Course registration is crucial at educational institutions throughout the academic system. Managing course registration for a semester is a time-consuming job that incorporates various factors such as course design, teacher assignment, and timetable.

Furthermore, course registration for FCFS-based registration will be more time consuming because it will need selecting numerous course instructors who will be teaching multiple courses. This study primarily focuses on investigating a Service Oriented Architecture by combining the curriculum, instructor management, and schedule management in order to provide students with a highly available, dependable online course registration platform. In our project we need a database to save our data and records after reading many papers we are looking about the difference between different types of databases. A. Boicea, F. Radulescu, Laura Ioana Agapin.   This paper compares and contrasts Oracle Database, a SQL database management system, and Mongo DB, a No SQL document-oriented database management system. Theoretical differences, features, constraints, integrity, distribution, system requirements, architecture, query, and insertion times are among the comparison factors.
We also researched the technical aspects, and we found that our project is possible to implement by using the MongoDB extension that the JavaScript programming language support. The most extensive defect of using this method is that we need to learn monody from scratch.


### 2.4	Operational feasibility
The proposed service will have a positive effect on the organization structure and procedures because it will be less interaction between student, advisor, and others, which means it will reduce the errors that’s made by humans; therefore, it will save time and effort. Our system will fit the current registration system as it is a new function of it, therefore it has a small effect on day-to-day operations. The only sensible change that may occur is the classes counter that the system is missing.

### 2.5	Schedule feasibility
I used [MS Project](https://en.wikipedia.org/wiki/Microsoft_Project) to create a plan for the schedule and time management as shown in `Figure 2` and `Figure 3`.

![Figure 2](https://user-images.githubusercontent.com/56771415/188312927-d9e753c4-2964-4f67-8b8b-91f7d3d6fde0.png)
![Figure 3](https://user-images.githubusercontent.com/56771415/188312940-ece5cbce-602e-461c-9aa8-57d91d30e873.png)


### 2.6	Economic feasibility
Here is the table that shows the cost in `Table 1`.

![Table 1](https://user-images.githubusercontent.com/56771415/188313100-99815d71-ca65-4d04-b784-b155e2f893ff.png)

### 2.7	Risk management
Risk management is the process of identifying, analyzing, and responding to project risks. It includes risk description, probability, impact, and how to mitigate these risks. Risk management also includes accepting risk.

### 2.7.1	Risk Register
Here is the table that shows the Register Risk in `Table 2`.

![Table 2](https://user-images.githubusercontent.com/56771415/188313245-e5a9f800-6c7b-47a5-b299-b099f947fe59.png)


### 2.8	Requirements gathering
Here is the table that shows the Requirements gathering in `Table 3`.

![Table 3](https://user-images.githubusercontent.com/56771415/188313282-e1c90283-8c03-45b5-9149-458242ed71fe.png)

### 2.8	Conclusion
We believe that our system will solve two major problems we have in our current system, which is the lack of classes and the time needed to register for classes. We will solve the first problem which is lack of classes by counting the number of student for each course then display it in the form of report to supervisor which will give him accurate number for each course then he/she can decide how many classes he/she need to open and how many instructors needs for each course. For the second problem, our system will suggest or recommend courses to a student, depending on his/her semester or credit and prioritize the course the student need to complete first.
By fixing these two problems, we will reduce the amount of interaction between the advisor and student and that will make course registration faster, easier and less stressful for both student and advisor.

## Chapter 3: Computing-based Solution/System Analysis
### 3.1	Introduction
The first and foremost purpose of the assignment was to test and analyze the whole system that how it going to be built and how it’s going to fulfill the requirements of the institution. The analysis and design part provides a comprehensive idea about the view that how the system will look after the completion. The system analysis part will provide Domain requirements, Functional requirements, and Non-functional requirements.

### 3.2	Domain requirements
- System must be efficient to fetch complete student information from the college system to calculate courses and generate plan for each student.
- System must provide reliable information and if the number of course is less than 4 ask the student to choose another course so he can take 4 courses in one semester.
- Any student profile which is incomplete or insufficient for generating a course plan will not be entertained in this new registration system.

### 3.3 Functional requirements
Functional Requirements: Which are the essential things (functions) we want the system to do so we can focus on the important thing and not get distracted. (Specifies things the system should do)
 
1.	Authentication				
2.	Authorization levels
3.	Create reports for supervisor
4.	Send verification code after login
5.	Send notification to students after drop/add any course  
6.	Generate courses for students
7.	Calculate how many classes needed for each course
8.	Advisor can drop /add courses for students
9.	Students can drop /add courses.
10.	Checking if student need to repeat the course
11.	Provide courses depending on the student data such as GPA, semester
12.	Advisor can remove or give permission to allow student to add/delete courses
13.	Student can view his courses
14.	Supervisor (admin) can add new user
15.	Supervisor (admin) can delete a user

### 3.4 Non-functional requirements
Non-Functional Requirements: The behavior of the system like user experience, general characteristics and some features.

1.	Responsive website
2.	Usability: How easily users will interact with the web
3.	Reliability: Reduce or remove all the bugs
4.	Mobile version or an app
5.	Color blind mode
6.	Dark mode
7.	Provide courses with time
8.	Prioritize or suggest important courses for student
9.	Notify advisor if student change any course without permission
10.	The application should work in most browser such as Safari, Firefox.
11.	Provide auto-register button that register student automatically depending on student data

### 3.5 Conclusion
In conclusion, chapter 3 should provide us with all requirements we need to build the system or what is important to our system and what is not important. Therefore, we will evaluate system according to these requirements. 

## Chapter 4: Computing-based Solution/System Design, Implementation, Test and validation
### 4.1 Functional requirements

### 4.2 Introduction
The purpose of this chapter is to check if the product is ready to be in the stage of full production and product launch also, we will explain the two different phases we went through which design and implantation. 

### 4.3	Testing Techniques
In this section we will explain how we test our product which is a web application, and how we may deploy the application in the cloud. In this part we will not test the product in terms of code like last assignment, therefore we will not use things like Black-Box or Grey-Box but the test will be more general or from user perspective, for example usability test or functionalities test.

 Testing
- The goal of the testing phase is to ensure that the product is ready for launch. Therefore, the product will be tested in various aspects with different techniques and the aspects are functionality testing, usability testing, UI (User Interface) testing, compatibility (Configuration) testing and testing in controlled environment.   
Functionality Testing
- First, functional testing is where we test or check if the system operates correctly without any problems. In this part we will do the following testing: Links testing, Forms testing, Cookies testing.

Links testing:
- In this part we will test emails, links pages that are not referenced, no broken links and Outbound links.

Forms testing:
- In this part we will test data input, form option (drop-down list) and required input.  

Cookies testing:
- In this part we will test the application with disabled cookies, with enabled cookies and check the security aspects when removing the cookies.

### 4.4 Functional requirements
### 4.5 Functional requirements
### 4.6 Functional requirements
### 4.7 Functional requirements
