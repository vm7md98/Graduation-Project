<img src="https://hct.ac.ae/wp-content/themes/HCTtheme/assets/images/logo.svg" alt="HCT Logo" width="400" height="124">

# Final Year Project
# _Universities Registration System_
**Done By [Mohammed, Bineid](https://github.com/vm7md98) and [Abdullah, Al Halabi](https://github.com/Abdallah019)**

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

## ABSTRACT
Auto-registration system utilizing artificial intelligence (AI) technology, in general, the project is providing a new technique that can be used efficiently for student to register. This new technique for registration will depend on server-side or backend. Students will be able to register for the course easily. The main goal of this project is to design a system that can help student to register easily and provide department or management the required data to decide how many classes they need for every course. The system we are using nowadays is not efficient and time consuming for both students and management. Therefore, this system will reduce time and effort.

## Chapter 1: Introduction
### 1.1	Context and motivation
When I was a second-year student trying to register my courses, I was having many problems, such as what course should I register for? How many courses can I take? Am I allowed to take this course? Because of these questions, I was forced to ask my advisor. This process is repeated every semester and most students face these problems. Therefore, the inspiration and the whole idea came from the beginning of the problem. The main reason why we started this project is that there was a problem that the collage did not solve yet. As a team, we are motivated by our passion for making something useful for the long term and to know our limits and skills. Thus, we have this project idea where we plan on finding solutions to these problems by utilizing smarter solutions such as Internet of things (IoT) to improve the efficiency, enhance the system, optimize the parking utilization, reduce cost and time when using the parking system or even managing it. This project will focus on solving the problems one by one, along with having additional features included to furthermore enhance the user’s experience.

##

### 1.2	Problem Statement
In every semester we are facing a problem with lack/surplus of classes due to having unbalanced number of lecturer and students. In 2020 fall semester, SMC student had a math course “Applied Mathematics” registered in his schedule. The problem is the system only allowing 10 students as minimum and they were 8 students only, but the registration system already accepted it and submit the request. Therefore, the lecturer cancels the course and who had 4 courses left with 3 courses which leads to more academic issues. The thought of doing this whole project was to solve this type of a problem and catch irregular behavior in the registration system.

To summarize our problem with the current registration system:

-	The main problem is having lack/surplus number of classes.
-	The system is not counting the number of students in every course and because of that we don’t know how many classes we need for every course.
-	The system is slow and freezes sometimes. 
-	Time: The process itself is bad and slow because there are too many people involved therefore, we need to make it auto-register or at least reduce the number of interactions between students, advisors, and others.
-	Human error: for example, register for courses for another major.
-	Lack of feedback: student (user) should get Immediate feedback on their actions for example: when they register/drop to a course or not met the minimum credit.

##

### 1.3	Project Objectives
HCT registration system is a system that provides and manages college courses. Their goal is to provide a fast, secure, and easier way to register courses to students across all HCT campuses. 
HCT registration system providing a lot of services for student such as: Prepare for Registration, Register for Classes, Plan Ahead, Browse, View Registration Information, Browse Course Catalog.
The above services work efficiently but it is missing some important features/services. One of these features is having a lack/surplus of classes due to having unbalanced number of lecturer and students. Currently system is not counting and dividing the classes based on the number of student and lecturer. This problem would affect every stakeholder (Students, Lecturers, Advisors, Supervisors, Administrations) in a separate way. For students, this will affect them by having the minimum/maximum number of credits, for ex. If a student had 4 courses and then they decided to cancel his 4th course, then he will stick with 3 course which will leave him with 9 credits, and this is not allowed due to HCT regulations. For Lecturers, the system will keep adding/dropping courses from their schedule, and this will confuse the lecturers. As an advisor, the students will ask the advisor frequently to send a request to the administrations to open/add new courses which will lead to consume more unneeded effort and time to the advisor. As a supervisor, he will have to check for the number of registered students in each course to open classes manually which leading to a lot of human errors. For administrations, they will have to deal with the massive number of courses requests that are coming from the supervisors.

#### Solution
Our solution to this problem will be create a new feature/service that will count the needed classes numbers based on the student courses registration. This solution will solve a lot of problems that we have talked about previously. It will help the students to get enough classes in every semester. Lecturers can be prepared before the semester starts. It will save a lot of time and effort on advisors. As a supervisor, she/he will have enough data to decide the classes number. Eventually, administration will know the number of classes, budgets, and lecturers needed in every semester. This solution will benefit HCT organization in every aspect, from the financial to the operational processes. We believe that it will lead to less human errors and will add a high value to HCT registration system effectively.

##

## Chapter 2: Domain related Concepts and Systems

##

### 2.1	Introduction
The HCT registration system is going to fulfil all the requirements and problems stated in the problem statement and this system will deal with all those problems efficiently. It will enhance the speed of work and will reduce the workforce cost. The reliability will be increased by the use of HCT registration system. Because in traditional systems generally institutions store the data on documents, files or on spread sheets but now it will provide a specific database in which it will be easy to insert of delete some kind of data about any registration and system will also allow to modify the data.

##

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

##

### 2.3 Pre-Project Phases

##

#### 2.3.1 Technical feasibility / Literature Review
In September 2020, SMC student had a course registered in his schedule with 12 credits. The problem is the system only allowing 10 students as minimum and they were 8 students only and the registration system already accepted it and submit the request. Therefore, the lecturer cancels the course and who had 4 courses left with 3 courses. Therefore, the lecturer cancels the course and who had 4 courses left with 3 courses. This problem leads to more academic issues. After discovering this problem, we read several pieces of literature about course registration systems.

One of the literatures Ruben Estevez, S. R. (2013) found or mentions in his research that there are actually some researchers who built an auto-registered system in which they used "genetic algorithms to generate satisfactory schedules" and found that the algorithms reduced the time needed to create course schedules, and the resulting schedules satisfy instructors. There are also other researchers who have built a system using wireless application protocol which enables the student to register over mobile but still requires the presence of students on campus. However, the problem is none of them mention how the user feels about for example: "the usability of course, registration systems. Can users learn to use a course registration system easily? Can they use it properly? Are they satisfied with the system?".

(LI, Y. ,2017) wrote a paper about Add-on Course Registration System and he/she talk about the problems, business component, technology component, Disadvantages and advantageous but he/she mention one feature about the system that I think it’s important and it will add a lot to our system which is Provide Course Recommendation Ranking and Reviews for example: student can tell how many credit he/she need to complete and what courses they have not scheduled for yet. Also, there is another paper written by Qurban A. Memon, M. S. (2005) about a similar feature called course priority, which suggests what course student should add or prioritize first.

Y. Peng, N. Liu, Y. Li and Z. Shao paper he says that the online course registration system is a critical component of the educational administration system, which includes registration guidance, registration control, undergraduate and graduate course registration, retaking and retesting, dropping a course in the middle of the semester, and information exchange, among other things. In April 2009, Tsinghua University's new course registration system became live. After implementing he found the new system enhanced the registration procedure, established common course registration for undergraduate and graduate students, and supported instructional activities across the spring, summer, and autumn semesters by allowing students to register for courses willingly. This article discusses the new online course registration system's design and execution, including the registration method, technical architecture, and system design.

Also, Parthiban, K; Nataraj, R. V says Each program has its requirements. Course registration is crucial at educational institutions throughout the academic system. Managing course registration for a semester is a time-consuming job that incorporates various factors such as course design, teacher assignment, and timetable.

Furthermore, course registration for FCFS-based registration will be more time consuming because it will need selecting numerous course instructors who will be teaching multiple courses. This study primarily focuses on investigating a Service Oriented Architecture by combining the curriculum, instructor management, and schedule management in order to provide students with a highly available, dependable online course registration platform. In our project we need a database to save our data and records after reading many papers we are looking about the difference between different types of databases. A. Boicea, F. Radulescu, Laura Ioana Agapin.  
This paper compares and contrasts Oracle Database, a SQL database management system, and Mongo DB, a No SQL document-oriented database management system. Theoretical differences, features, constraints, integrity, distribution, system requirements, architecture, query, and insertion times are among the comparison factors.
We also researched the technical aspects, and we found that our project is possible to implement by using the MongoDB extension that the JavaScript programming language support. The most extensive defect of using this method is that we need to learn monody from scratch.

#### 2.3.2 Operational Feasibility
The proposed service will have a positive effect on the organization structure and procedures because it will be less interaction between student, advisor, and others, which means it will reduce the errors that’s made by humans; therefore, it will save time and effort. Our system will fit the current registration system as it is a new function of it, therefore it has a small effect on day-to-day operations. The only sensible change that may occur is the classes counter that the system is missing.

#### 2.3.3 Schedule Feasibility
I used [MS Project](https://en.wikipedia.org/wiki/Microsoft_Project) to create a plan for the schedule and time management as shown in `Figure 2` and `Figure 3`.

![Figure 2](https://user-images.githubusercontent.com/56771415/188312927-d9e753c4-2964-4f67-8b8b-91f7d3d6fde0.png)
![Figure 3](https://user-images.githubusercontent.com/56771415/188312940-ece5cbce-602e-461c-9aa8-57d91d30e873.png)

#### 2.3.4 Economic Feasibility
The above `Table 1` shows the balance and the cost for every asset we chose, it also shows if it's under or above our budget.

![Table 1](https://user-images.githubusercontent.com/56771415/188313100-99815d71-ca65-4d04-b784-b155e2f893ff.png)

##

### 2.4 Risk Management
Risk management is the process of identifying, analyzing, and responding to project risks. It includes risk description, probability, impact, and how to mitigate these risks. Risk management also includes accepting risk.

#### 2.4.1 Risk Register
![Table 2](https://user-images.githubusercontent.com/56771415/188313245-e5a9f800-6c7b-47a5-b299-b099f947fe59.png)

The above `Table 2` shows the risks we might face in this project and how we can reduce or remove the risk.

### 2.5	Requirements gathering
Here is the table that shows the Requirements gathering in `Table 3`.

![Table 3](https://user-images.githubusercontent.com/56771415/188313282-e1c90283-8c03-45b5-9149-458242ed71fe.png)

##

### 2.6	Conclusion
We believe that our system will solve two major problems we have in our current system, which is the lack of classes and the time needed to register for classes. We will solve the first problem which is lack of classes by counting the number of student for each course then display it in the form of report to supervisor which will give him accurate number for each course then he/she can decide how many classes he/she need to open and how many instructors needs for each course. For the second problem, our system will suggest or recommend courses to a student, depending on his/her semester or credit and prioritize the course the student need to complete first.
By fixing these two problems, we will reduce the amount of interaction between the advisor and student and that will make course registration faster, easier and less stressful for both student and advisor.

The significant challenge that we will face is to test our service on universities portals. Also, it won’t be easy to use the universities portal to test our code. In our project we need to learn the below skills/languages to create our service:

- SQLDeveloper (Oracle) or MongoDB: For our database.
- Node.js or PHP: To link our database to the service.
- JavaScript (Vanilla or React Library) and Bootstrap: To create our service UI.


##

## Chapter 3: Computing-based Solution/System Analysis
### 3.1	Introduction
The first and foremost purpose of the assignment was to test and analyze the whole system that how it going to be built and how it’s going to fulfill the requirements of the institution. The analysis and design part provides a comprehensive idea about the view that how the system will look after the completion and how it will get, store, and transfer the data and also gives an idea about the data processing inside the system. The system analysis part will provide the cost idea and also provide the UML model of this system so, it would be easy for the developers to read this document and start the development process step by step. The edge system analysis provides us is that it enables us to decrease the risks and deal will all the sensitive components efficiently.

##

### 3.2	Domain requirements
- System must be efficient to fetch complete student information from the college system to calculate courses and generate plan for each student.
- System must provide reliable information and if the number of course is less than 4 ask the student to choose another course so he can take 4 courses in one semester.
- Any student profile which is incomplete or insufficient for generating a course plan will not be entertained in this new registration system.

##

### 3.3 Functional requirements
Functional Requirements: Which are the essential things (functions) we want the system to do so we can focus on the important thing and not get distracted. (Specifies things the system should do)

| No. | Requirements |
| - | ----- |
| 1 | Authentication |
| 2 | Authorization levels |
| 3 | Create reports for supervisor |
| 4 | Send notification to students |
| 5 | Generate plan for students |
| 6 | Calculate how many classes needed for each course |
| 7 | Advisor: Edit Student Plan |
| 8 | Student: Edit Plan |
| 9 | Checking if student need to repeat the course |
 
<!-- 1.	Authentication				
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
15.	Supervisor (admin) can delete a user -->

##

### 3.4 Non-functional requirements
Non-Functional Requirements: The behavior of the system like user experience, general characteristics and some features.

| No. | Requirements |
| - | ----- |
| 1 | Provide multiple plans for students |
| 2 | Usability: How easily users will interact with the web |
| 3 | Reliability: Reduce or remove all the bugs |
| 4 | Front End: CSS and Bootstrap ...etc |

<!-- | 5 | Color blind mode |
| 6 | Dark mode |
| 7 | Provide courses with time |
| 8 | Prioritize or suggest important courses for student |
| 9 | Notify advisor if student change any course without permission |
| 10 | The application should work in most browser such as Safari, Firefox |
| 11 | Provide auto-register button that register student automatically depending on student data | -->

<!-- 1.	Responsive website
2.	Usability: How easily users will interact with the web
3.	Reliability: Reduce or remove all the bugs
4.	Mobile version or an app
5.	Color blind mode
6.	Dark mode
7.	Provide courses with time
8.	Prioritize or suggest important courses for student
9.	Notify advisor if student change any course without permission
10.	The application should work in most browser such as Safari, Firefox.
11.	Provide auto-register button that register student automatically depending on student data -->

##

### 3.5 Conclusion
Well, in this task we faced many challenges unfortunately or luckily as you can say because this task gave us hard time but also provided us with knowledge and problem-solving techniques and it was a great experience overall. The major issue that we faced was in the flow chart, we were facing problems in understanding the case because we were trying our best to do it perfectly. So, we repeated the flow chart 4 times and then we got the best one. In this whole scenario, the software development methodology was also a big task because the success ratio of development of the system and especially the system analysis document depends on the methodology that we choose to develop the system, as we all know that it depends on the idea of the system that are we clear about the requirements? And there is no need to change the requirements in the future? Then we choose the best method and suggest developing with that methodology. 
Cost management is also a huge task when we plan for a system because the estimated cost enables us to use the resources according to the budget and also if we need to outsource for some resources then we feel free to hire someone else for the specific task. 
The entity-relationship diagram part is also tricky because there should never be any mistake and all the entities and their relationships with each other should follow the rules and regulations of UML modeling. The topics, those students should read before doing these kinds of tasks are as follows:

- Development Methodologies
- UML Modeling
- ERD
- Cost Analysis
- Risk Management 

## Chapter 4: Computing-based Solution/System Design, Implementation, and Test
### 4.1 Introduction
Education is one of the major concerns for every state in the present time. Everyone and every country are focusing on the improvement in education system. According to research, the adult literacy rate in Arab Emirates is increased from 53% to 93% and this rate is recorded from 1975 to 2015 and now these days it is improving more. the primary concern of all the states these days. The average increase in literacy rate is 21.02%. With the growing literacy rate of course, we can say that people are getting admissions in different educational institutes rapidly.

So, to takeover this huge amount of registrations day by day, every institution whether it’s a school, college, or university they want an efficient and automatic registration system that fills up their needs and make the registration process easy for both institute and the students. These automatic systems will reduce the workload and work forces in the college. This project is all about that online registration system named as HCT registration system. This system is going to solve all these registration and management problems.

##

### 4.2 Design
Design phase is the longest part in this project because it explains the design of the whole computing-based solution from design deliverables, ERDs, Json and other diagrams.

#### 4.2.1 Entity Relationship Diagram
Relational design is the actual design of the database. We have two ERDs one for SQL and NoSQL, both of them are right but at first, we think that we will work with Oracle which SQL but at the end we decide MongoDB is better for us. However, because we are using MongoDB with Document-oriented Database we need to attach our JSON file with it.

![image](https://user-images.githubusercontent.com/56771415/189226707-3bbfaa1c-9691-4420-971d-5c222bcc1e97.png)

![image](https://user-images.githubusercontent.com/56771415/189226714-4ef4bf3e-8d98-4488-98ab-8ef85c726fed.png)

The above `Figure 4` & `Figure 5` shows the SQL Relational Diagram and NoSQL Relational Diagram.

#### 4.2.2 JSON
Here is the JSON as `Figure 6`, `Figure 7`, `Figure 8` and `Code 1` shows below.

![Figure 6](https://user-images.githubusercontent.com/56771415/189226954-cd9d94ad-b144-45d0-9775-0d14e8282d5c.png)
![Figure 7](https://user-images.githubusercontent.com/56771415/189226968-f0122124-2d9c-4ddc-b161-9b1f6b882a7d.png)
![Figure 8](https://user-images.githubusercontent.com/56771415/189226976-2446ba68-68d3-475b-b6af-e43ca23460ed.png)

```C#
[
  {
    "std_id": "h00353361",
    "first_name": "Mohammed",
    "last_name": "Bineid",
    "mobileNo": 567760020,
    "year": 2022,
    "semNo": "1",
    "gpa": 2,
    "gender": "male",
    "user": {
      "username": "h000001",
      "password": "0000",
      "email": "h000001@hct.ac.ae"
    },
    "adv_Id": "h000002",
    "d_id": 1,
    "major_code": "CIS",
    "course_id": [1, 2, 3, 4, 5]
  },
  {
    "users_std": {
      "username": "h00353361",
      "password": "0000",
      "email": "h000001@hct.ac.ae",
      "std_id": "h00353361"
    },
    "user_adv": {
      "username": "h000002",
      "password": "0000",
      "email": "mtogher@hct.ac.ae",
      "adv_Id": "h000002"
    },
    "users_fac": {
      "username": "h000003",
      "password": "0000",
      "email": "h000003@hct.ac.ae",
      "std_id": "h000003"
    }
  },
  {
    "course_id": 1,
    "title": "JAVA",
    "credit_hours": 12,
    "course_code": "CIS001"
  },
  {
    "major_code": "CIS",
    "major": "IT",
    "course_id": [1, 2, 3, 4, 5]
  },
  {
    "adv_id": "h000002",
    "first_name": "Madeleine",
    "last_name": "Togher",
    "mobileNo": 567760020,
    "user": {
      "username": "h000002",
      "password": "0000",
      "email": "mtogher@hct.ac.ae"
    },
    "d_id": 1
  },

  {
    "sp_id": "h000003",
    "first_name": "Unkown",
    "last_name": "Unkown",
    "mobileNo": 567760020,
    "user": {
      "username": "h000003",
      "password": "0000",
      "email": "h000003@hct.ac.ae"
    },
    "d_id": 1
  },
  {
    "d_id": 1,
    "address:": "200 SHJ",
    "city": "Dubai"
  },
  {
    "semester_1": [
      {
        "plan_No": 1,
        "course_id": [1, 2, 3, 4, 5]
      },
      {
        "plan_No": 2,
        "course_id": [1, 2, 3, 4, 5]
      }
    ],
    "semester_2": [
      {
        "plan_No": 1,
        "course_id": [1, 2, 3, 4, 5]
      },
      {
        "plan_No": 2,
        "course_id": [1, 2, 3, 4, 5]
      }
    ]
  }
]

```

##

#### 4.2.3 UI design
Designing a web page from appearance and functionality to navigation and ease-of-use, can be time consuming and frustrating. Therefore, tools or processes like wireframes and prototypes are there to help designer. Wireframes are blueprints for the website or basic representations of the product. The two types of wireframes are low-fidelity, mid-fidelity and high-fidelity, but in this project, we will use low and high fidelity. Prototypes are early design models of the final UI of your website or simply an advanced wireframe with more visual detail and interaction. The benefit of these tools is to save time and money by having an idea on how the final product will look like.

##### 4.2.3.1 Low-Fidelity
Low-fidelity wireframe is a basic or a skeleton of a web page. It helps programmer, stakeholders, and designers to have an idea of where the UI element might be placed. Low fidelity can be developed by hand as a sketch or using digital tools like **Figma** or **Adobe XD**, but we used Figma in this project. 

##### 4.2.3.2 High-Fidelity
High-fidelity wireframes are more complete version of the end product than low fidelity. Usually, high-fidelity is the last thing to be done in the project because it takes more effort to create, but they are effective in that they reveal how a product will look at project completion.

#### Pages
- Login 
- Authentication 
- Select_plan
- Approvement
- Report


##### 4.2.3.3 Login
![Figure 9](https://user-images.githubusercontent.com/56771415/189227660-f72e1121-239d-4ee7-9207-64dc8a2cc12f.png)
![Figure 10](https://user-images.githubusercontent.com/56771415/189227666-82cd754f-3c22-446e-b962-5d788c5ad25d.png)
![Figure 11](https://user-images.githubusercontent.com/56771415/189227671-7ec8348d-862d-44f2-890d-eba3bf6ecfc7.png)

#### Description 
The above `Figure 9`, `Figure 10` and `Figure 11` Login page is the first page you will see when you enter the portal or website. First you need to Enter your email and password in the **textboxes**, then click on **button**. After you click on the button you will redirect to **Authentication page**.

##### 4.2.3.4 Authentication
![Figure 12](https://user-images.githubusercontent.com/56771415/189227950-645fa2d8-d0b4-4d25-ab76-e0659acd1111.png)
![Figure 13](https://user-images.githubusercontent.com/56771415/189227956-e8dd617c-2e9c-4e1d-8e7f-b7b13300b4e8.png)
![Figure 14](https://user-images.githubusercontent.com/56771415/189227967-00d90a0d-1bf7-4f76-b085-106e436719cb.png)

#### Description 
After being redirected to **Authentication page** the user should receive a code which he needs to enter in the **textbox**, then he needs to click on the **button** to make sure that no one can enter his account as shown in `Figure 12`, `Figure 13` and `Figure 14`. After you click on the button you will redirect to **Select_plan page**.

##### 4.2.3.5 Select_plan
![Figure 15](https://user-images.githubusercontent.com/56771415/189228546-0e61bbdb-0a4e-4af7-89a5-cf464896f8ed.png)
![Figure 16](https://user-images.githubusercontent.com/56771415/189228551-e4c94122-3c2e-4f1d-9ce5-3eddc35993c2.png)
![Figure 17](https://user-images.githubusercontent.com/56771415/189228560-eeedd927-94a3-4c8e-a30d-f02aab85aa59.png)

#### Description 
After being redirected to **Select_plan** page you need to select a plan by click on button or checkbox then clicking on the confirm button which is on the right side below the plan table. This page is for selecting a plan as shown in `Figure 15`, `Figure 16` and `Figure 17`, after you click on the confirm button you will redirect to **Approvement page**.

##### 4.2.3.6 Approvement
![Figure 18](https://user-images.githubusercontent.com/56771415/189228695-ee37c2f2-83c6-439b-98f7-7a2204fd1e40.png)
![Figure 19](https://user-images.githubusercontent.com/56771415/189228705-835a46fc-2589-4115-9c03-360e402f59dd.png)
![Figure 20](https://user-images.githubusercontent.com/56771415/189228710-90e28e1d-c494-464b-b212-cbc8777b5dca.png)

#### Description 
After being redirected to **Approvement page**, this page is to change your courses or delete them as shown in `Figure 18`, `Figure 19` and `Figure 20`. After you are done you just need to click the approvement button then the system should send SMS or email to make sure you are registered.

##### 4.2.3.7 Report
![Figure 21](https://user-images.githubusercontent.com/56771415/189228975-a7568c65-c268-42f4-b2a8-78174e7e2cee.png)
![Figure 22](https://user-images.githubusercontent.com/56771415/189228983-424d894f-a11f-4113-a8b0-4cb7b01fa4b7.png)
![Figure 23](https://user-images.githubusercontent.com/56771415/189228990-de2eae06-4c2a-4b3a-bf3b-6d95030f8947.png)

#### Description
Report page is for department or supervisor and it’s just for reading. It contains all the information about each course and suggested classes number as shown in `Figure 21`, `Figure 22` and `Figure 23`.

##### 4.2.3.8 PDF's [Low & High Fidelity & Dark]
[Low-Fidelity.pdf](https://github.com/vm7md98/Graduation-Project/files/9530736/Low-Fidelity.pdf)

[High-Fidelity.pdf](https://github.com/vm7md98/Graduation-Project/files/9530738/High-Fidelity.pdf)

[Dark-Mode-High-Fidelity.pdf](https://github.com/vm7md98/Graduation-Project/files/9530739/Dark-Mode-High-Fidelity.pdf)

##

#### 4.2.4 Design Evaluation
Planning or designing an evaluation for a project is a critical step in every project because it will give the developer an idea about product quality. The design evaluation criteria are different for every project because the criteria depend on the product. However, Design Principles and Accessibility are the criteria we chose.

**Note: we can’t use Usability criteria because we need to develop the website to test it.**

##### 4.2.4.1 Design Principles
The rules a designer must follow to create an effective and attractive product or simply what you should do and don’t and it based on knowledge, experience, and common-sense. There are five Design Principles rules Visibility, Feedback, Affordances, Constraints, Consistency.

| Principle | Meaning |
| - | ----- |
| Visibility | This principle is responsible for how the product or what the product is and what used for |
| Feedback | This principle is responsible for making a clear response on what has been accomplished by the user |
| Affordances | This principle is responsible for how the product is used |
| Constraints | This principle is responsible for restricting the possible actions that can be performed |
| Consistency | This principle is responsible for creating a uniform interface or having similar operations and similar elements for similar tasks |

<!--
- **Visibility**

This principle is responsible for how the product or what the product is and what used for. 

- **Feedback**

This principle is responsible for making a clear response on what has been accomplished by the user. 

- **Affordances**

This principle is responsible for how the product is used.

- **Constraints**

This principle is responsible for restricting the possible actions that can be performed.

- **Consistency**

This principle is responsible for creating a uniform interface or having similar operations and similar elements for similar tasks.
-->

![Table 4](https://user-images.githubusercontent.com/56771415/189230932-adb22fb2-6634-48f4-8729-70d46b284cdd.png)

The above `Table 4` shows the design principles that we are going to use in our project.

##### 4.2.4.2 Accessibility
Thousand of students will use this system therefore, we need to make sure that everyone should be able to use our system and that’s called accessibility. Web Accessibility is all about designing or developing a website with tools and technologies so that people with disabilities can use them. In this project we will focus on one type of disabilities Visual Impairment.

##### 4.2.4.3 Visual Impairment
These types of people are blind, or they have any kind of vision loss, and they need some sort of feature. Therefore, we will provide these features in our website:
- We will use Alt Text to images or icons because people with this problem usually rely on assistive technologies such as Screen Readers and refreshable Braille Readers.
- Avoid using thin fonts and we will try to avoid adding links to images that can’t support Alt Text.
- Avoid using Place Holder because it’s usually gray and small which make it hard to see.
- Avoid Automatic Media and Navigation.
**Color blind**: To avoid most problems with color blindness we will provide a dark-mode which will make the website just white, black, dark grey and more, but it will be limited color and the majority of space is dedicated to dark surfaces.


##### 4.2.4.4 Discussion
Designing a website is one of the hardest parts of this project for several reasons. First, we can’t ask people about our design or get feedback from them because there is no time and it’s hard to find people. Second, we can’t design a website that is accessible for all types of people such as people with **Motor Skills/Physical Disabilities** because of time. However, we didn’t include **Usability criteria** because we need to develop the project (website) first then we can test it to see if it meets the criteria or not.

#### 4.2.5 Hierarchical Task Analysis (HTA)
Hierarchical Task Analysis (HTA) is a diagram or method to describe the activity in terms of how to reach the goals. It focuses on physical and observable actions, and also includes actions not related to software.

#### Symbols and Notation
![Figure 24](https://user-images.githubusercontent.com/56771415/189231987-5fa7eee4-5242-4df4-913d-47c29a378b87.png)

**Main Task**: main task always starts with number 0. `Figure 24`

![Figure 25](https://user-images.githubusercontent.com/56771415/189232069-f2259ab1-9dad-4794-8eac-10527279a3a4.png)

**Sub-Task**: sub-task always starts with number 1 or more. `Figure 25`

![Figure 26](https://user-images.githubusercontent.com/56771415/189232118-d24a46ca-e3a1-46cd-b366-086c70c52a3b.png)

**letter “ * ”**: Tasks that are repeated. `Figure 26`

![Figure 27](https://user-images.githubusercontent.com/56771415/189232164-479936cc-6ad2-4367-bb69-0179724d601c.png)

**letter “ O ”**: Tasks that are optional. `Figure 27`

![Figure 28](https://user-images.githubusercontent.com/56771415/189232200-bfc1dab2-25bc-4f1d-95b2-7491242379ed.png)

**A line**: under a task means there are no more subtasks. `Figure 28`

![Figure 29](https://user-images.githubusercontent.com/56771415/189232216-1bb6befb-669e-4570-ad4c-e0edff74b823.png)

**Plan**: plan can be numbered based on the task; however, the plan shows the path you need to take to reach your goal or main task. `Figure 29`

##

##### 4.2.5.1 Hierarchical Task Analysis (HTA) Diagram
The first step to draw a **HTA** diagram is to make something called **tasks breakdown** which simply means breaking every task you have into smaller tasks. To make a task breakdown we need these steps:

- Identify the task title or main task which is the starter point.
- Identify the first level of sub-tasks.
- Identify which sub-tasks need further analysis.
- Number task and all sub-tasks.

#### Tasks break down:
0. To register

1. Enter URL

2. Login

  2.1. Enter the Authentication code

3. Click register

  3.1. Select plan

  3.2. Edit course

  3.3. Delete course

4. Click confirm

After making Task break down, we can draw the diagram. However, the diagram has more details like identifying **essential** and **optional** sub-tasks and finally planning for each path. `Figure 30`

![Figure 30](https://user-images.githubusercontent.com/56771415/189232427-d5f34704-720b-4d5a-9007-6b800c09eb46.png)

##

#### 4.2.6 Context diagram level 0 and 1
Diagrams or pictures are among the best and oldest forms of human communication They are mainly used for representation. A **context diagram** or **data flow diagram** is a high-level model that shows or illustrates how your system interacts with alternative entities (systems, database, process) and how the data flows. The main benefit of context diagram is that no knowledge or experience is needed to understand the diagram. Levels in a context diagram or data flow diagram are numbered from **level 0** and **level 1** or more, they use a context diagram as a base to draw more detailed diagrams. 

#### Symbols and Notation
![Figure 31](https://user-images.githubusercontent.com/56771415/189232725-8f809f0f-e8b4-4f09-93e7-544158571719.png)

**Process**: Any process that produces , updates, and performs computations. `Figure 31`

![Figure 32](https://user-images.githubusercontent.com/56771415/189232735-009fd71e-58ff-4748-847d-0f83b423e491.png)

**External entity**: External system that’s interact with the system by sending or receiving. `Figure 32`

![Figure 33](https://user-images.githubusercontent.com/56771415/189232738-dc34daf0-aa5a-4530-bd52-18890684bde6.png)

**Data store**: Is where we store or hold data to use it later (database). `Figure 33`

![Figure 34](https://user-images.githubusercontent.com/56771415/189232748-1a664d7b-7cf3-4c2d-9b33-d22287c1995e.png)

**Data flow**: The route or path that the data travel between external entities, processes and data stores. `Figure 34`

##### 4.2.6.1 Context level Diagram
In the below diagram, **Auto-register system** is the main process, or we can call it **process 0**, is the process that represents the entire information system. There are eight entities Student, Advisor, Plan offering system, Course offering system, Advisor management system, Academic history system and Department. `Figure 35`

![Figure 35](https://user-images.githubusercontent.com/56771415/189233296-a4145d8f-2472-4656-8b47-feaf3eb7f948.png)

#### System Description
- The system provides the specific Plans for each student and generates reports.
- The system filters out those courses that cannot be selected by students because their pre-requisites, GPA , and semester are not satisfied. Repeated courses are also added to the plan.
- The student makes Plan selections.
- The advisor has permission to edit or change plans for students.
- The student can edit or change courses depending on the filtered courses.
- The system sends confirmation to students and generates reports for the department.

##### 4.2.6.2 Level-0 Diagram
In the context diagram we represent the entire system with a single process, which is **process 0**. However, in **level 0** we represent each process as **sub-processes** and now we can add **data store**, they are together form a complete system. `Figure 36`

**Sub-processes**: Select Plan 0.1 - Get Information 2.0 - Filter Course 3.0.

**Data store**: Plans Offered and Courses **D1** , Approved Plan **D2**

![Figure 36](https://user-images.githubusercontent.com/56771415/189233869-bd911daa-eaa9-4603-b6cf-064512f4aa1c.png)

#### Level-0 Diagram: Process-1.0, Select Plan
The student selects which of the planes he prefers. The selected plan (approved plan) is stored. Both student and advisor can make modification if there are courses. Repeat courses cannot be removed. Send confirmation and produce report, then send it to department.

#### Level-0 Diagram: Process-2.0, Get Semester Information
Advisors receive student list from the Advisor Management System.
Courses offered received from the Course Offering System.

#### Level-0 Diagram: Process-3.0, Filter Course
Checks if student needs to repeat courses and student status. 
Other semester courses for the student are provided through Plan Offering System and stored. 

##### 4.2.6.3 Level-1 Diagram
At level 1 diagram we look at the processes that make up level 0 diagram but with more details. `Figure 37`

Outside the rectangular boundary are external entities and data store however they are out of scope of this level 1 diagram.

![Figure 37](https://user-images.githubusercontent.com/56771415/189234076-3734e3d5-3a65-43ef-9e0d-452660c025fe.png)

##### 4.2.6.4 Discussion
The first problem we faced in this report was understanding what context, level 0, level 1 diagrams are because many articles and papers contradict each other and because of that we took a lot of time and effort. To solve this problem, we read even more articles and watched many videos. In the end, the problem was there are two types or methods to create context, level 0, level 1 which are old and new. However, **we chose the old system because it is more logical**. 

**Old method**: Starting with creating context then level 0 then level 1 and continue.

**New method**: Starting with creating level 0 then 1 then 2 and continue.

##

#### 4.2.7 UML Use Case
#### Use case definition
A use case diagram is used to describe the interaction between actors and the system that you want to observe, which is Auto-register system. Use case diagram has 4 elements: system, actor, relationships and use cases. Unlike context diagram use case specify how the system interacts with actors without worrying about the details of how that functionality is implemented.

#### Symbols and Notation

![Figure 38](https://user-images.githubusercontent.com/56771415/189234320-980008b8-148c-4b32-b1c0-22b9adc5c236.png)

**Actor**: Stick figures is an end-user but not necessarily sometime can be non-human. `Figure 38`

![Figure 39](https://user-images.githubusercontent.com/56771415/189234328-12c5b864-d9ac-4a65-a95e-3a5919ac019d.png)

**System boundary**: A system boundary defines the scope of what a system will be. `Figure 39`

![Figure 40](https://user-images.githubusercontent.com/56771415/189234336-b3efd3d7-80dc-45fc-b6dc-93a61f35ffac.png)

**Use case**: A use case represents a functionality of the system. `Figure 40`

![Figure 41](https://user-images.githubusercontent.com/56771415/189234340-d4959b45-a055-45ce-8b82-193e617d9e58.png)

**Relationships or Associations**: Used to describe the relationships between actors and the use cases. `Figure 41`


##### 4.2.7.1 Use case diagram

![Figure 42](https://user-images.githubusercontent.com/56771415/189234581-f2554878-4955-4ed9-a21b-6f1984d11957.png)

The above `Figure 42` shows the use case diagram of our system.

#### System Description

- All end-users of the system must authenticate to use its services.

- Student must select a plan then, approve it.

- All end-users can manage plan.

- Only supervisor can read report.


##

#### 4.2.8 State Diagram
![Figure 43](https://user-images.githubusercontent.com/56771415/189234889-82a83c4d-ebb4-44c3-84e7-f83a6ede9d78.png)

The above `Figure 43` shows the state diagram of our system.

##

#### 4.2.9 Sequence Diagram
![Figure 44](https://user-images.githubusercontent.com/56771415/189234906-ba1d27e6-d580-4a2b-a6fa-64dc96cbdc7c.png)

The above `Figure 44` shows the sequence diagram of our system.

## 4.3 Development
We classify our development tools into these four categories **Programming language, Database, Network configuration, along with other technologies**.

#### Programming language
A programming language is a formal language comprising a set of strings that produce various kinds of machine code output or simply mean a way to communicate with computers. We classify programming languages into two categories front-end and Back-end.


##

#### 4.3.1 Front-End
Front-end or client-side is everything that users interact with from text, colors, buttons, navigation menus and images. In this project we will use HTML, CSS, and JavaScript.

| Term | Meaning |
| - | ----- |
| HTML | Stands for Hypertext Markup Language is the basic building block of almost any website. The purpose of HTML is to define meaning and structure for web content |
| CSS | Stands for Cascading Style Sheets is one of the style sheet languages like DSSSL and XSL which responsible of the presentation of the website such as layout, colors, fonts |
| JavaScript | Used to make our website more interactive with users like drop-down menus and contact forms |
| jQuery | Is JavaScript library and the purpose of it to simplify HTML DOM tree traversal and manipulation, as well as event handling and more |

<!--
##### 4.3.2.1 HTML
Stands for Hypertext Markup Language is the basic building block of almost any website. The purpose of HTML is to define meaning and structure for web content.

##### 4.3.2.2 CSS
Stands for Cascading Style Sheets is one of the style sheet languages like DSSSL and XSL which responsible of the presentation of the website such as layout, colors, fonts.

##### 4.3.2.3 JavaScript
Used to make our website more interactive with users like drop-down menus and contact forms.

##### 4.3.2.4 jQuery
Is JavaScript library and the purpose of it to simplify HTML DOM tree traversal and manipulation, as well as event handling and more.
-->

##

#### 4.3.2 Back-End
Back-end or server-side is everything that happens behind-the-scenes activities such as communicating with servers or databases. However, we removed the database-side because
we will explain it on the next [Database section](https://github.com/vm7md98/Graduation-Project/blob/master/README.md#433-database).

| Term | Meaning |
| - | ----- |
| Node.js | An open-source, cross-platform, back-end JavaScript runtime environment and it uses JavaScript. The purpose of node.js in this project is to handle all the operations on the server-side such as generate pages, read and write files, collect form data |
| Embedded JavaScript Templating (EJS) | Is template language/system that help user to generate html pages with plain JavaScript. It works like a master page in .asp, however, we will use it because it makes things easier when we need to output html using JavaScript |
| Document Object Model (DOM) | Programming API for HTML and XML documents and it defines the logical structure of documents. The purpose of DOM is to allow language like JavaScript to style or structure your website |
| Express.js | It's a back-end web application framework for Node.js |
| Mongoose | It's a library for MongoDB and Node.js that allows you to define schemas with strongly typed data or to make simple it’s an object modeling tool for MongoDB |

<!--
##### 4.3.3.1 Node.js
An open-source, cross-platform, back-end JavaScript runtime environment and it uses JavaScript. The purpose of node.js in this project is to handle all the operations on the server-side such as generate pages, read and write files, collect form data.

##### 4.3.3.2 Embedded JavaScript Templating (EJS)
Is template language/system that help user to generate html pages with plain JavaScript. It works like a master page in .asp, however, we will use it because it makes things easier when we need to output html using JavaScript.

##### 4.3.3.3 Document Object Model (DOM)
Programming API for HTML and XML documents and it defines the logical structure of documents. The purpose of DOM is to allow language like JavaScript to style or structure your website.

##### 4.3.3.4 Express.js
Is a back-end web application framework for Node.js.

##### 4.3.3.5 Mongoose
Is a library for MongoDB and Node.js that allows you to define schemas with strongly typed data or to make simple it’s an object modeling tool for MongoDB.
-->

##

#### 4.3.3 Database
Database is a set of organized collection of structured information or data stored electronically in a computer system. There are many types of databases, but we will use NoSQL database.

| Term | Meaning |
| - | ----- |
| NoSQL | Stand for not only SQL is  which mean you can use both SQL and other technologies like JSON to store and retrieve data. There are four types, but we will use **Document-Oriented Database** and to specific we will use MongoDB, this type of database used JSON like document to store data |
| Atlas | A service or a cloud service that provided by MongoDB |

<!--
##### 4.3.4.1 NoSQL
Stand for not only SQL is  which mean you can use both SQL and other technologies like JSON to store and retrieve data. There are four types, but we will use **Document-Oriented Database** and to specific we will use MongoDB, this type of database used JSON like document to store data.

##### 4.3.4.2 Atlas
A service or a cloud service that provided by MongoDB.
-->

##

#### 4.3.4 Network configuration
Configuring network is process of assigning network settings, policies, flows, and control or simply it’s a process to design some type of communication.

| Term | Meaning |
| - | ----- |
| Heroku | Is a platform (PaaS) in cloud used to deploy and manage apps or in our project we will deploy a website |
| Git | Stand for Global Information Tracker which used to manage your source code |

<!--
##### 4.3.5.1 Heroku
Is a platform (PaaS) in cloud used to deploy and manage apps or in our project we will deploy a website.

##### 4.3.5.2 Git
Stand for Global Information Tracker which used to manage your source code.
-->

##

#### 4.3.5 Configure/deploy
Since we will use Heroku we will explain the steps as developer and for end-user all he need is laptop or pc with internet using WI-FI or LAN.

#### Steps
**Note: In this part we will assume that all dependencies and plugins are already added to the project**.

1. Create Account in [Heroku](https://www.heroku.com) (Free)
2. Login
3. Download [Heroku Command Line Interface (CLI)](https://devcenter.heroku.com/articles/heroku-cli) and [Git](https://git-scm.com/downloads).
4. Using Command Line Interface like CMD or Git Bash login to Heroku. `Code 2`

```CMD
C:\Users\User>heroku login
  >> Warning: heroku update availabe from 7.53.0 to 7.59.0.
heroku: Press any key to open up the browser to login or q to exit:
```

5. Check that you have the prerequisites installed and they are node, npm and git this is important because some versions need different steps.

5.1. Check node by enter: "node --version" `Code 3`

```CMD
C:\Users\User>node --version
v14.18.1
```

5.2. Check node by enter: "npm --version" `Code 4`

```CMD
C:\Users\User>npm --version
6.14.15
```

5.3. Check node by enter: "git --version" `Code 5`

```CMD
C:\Users\User>git --version
git version 2.33.1.windows.1
```

6. Create a Profile file in your project folder to declare what command should be executed when you start your app. `Code 6`

```CMD
C:\Users\User\Desktop\..m>copy nul Procfile
	1 file(s) copied.
```

7. Write this code in Profile file: web: node “your index name”. “file type”. `Code 7`

```CMD
web: node app.js
```

8. Run git init command to creates a new Git repository. `Code 8`

```CMD
C:\Users\User\Desktop\..m>git init
```

9. Run git add command to add files to the Git staging area. `Code 9`

```CMD
C:\Users\User\Desktop\..m>git add
```

10. Run git commit -m “ your comment” command to save what you did. `Code 10`

```CMD
C:\Users\User\Desktop\..m>git commit -m "1st GP Project commit"
```

11. Run heroku create command to create an app on Heroku. `Code 11`

```CMD
C:\Users\User\Desktop\..m>heroku create
```

12. Run git push heroku master command to upload your files to Heroku server. `Code 12`

```CMD
C:\Users\User\Desktop\..m>heroku create
```

12. Run git push heroku master command to upload your files to Heroku server. `Code 13`

```CMD
C:\Users\User\Desktop\..m>git push heroku master
```

13. Finally click on the link or copy and paste it on the browser to go to your website.

##

#### 4.3.6 Other Technologies
In this section we listed the rest of the programs/software that we used in this project.

| Term | Meaning |
| - | ----- |
| Integrated Development Environment (IDE) | IDE is software or application to build other applications and it has tools and graphical user interface (GUI) to help developer |
| Visual Studio Code (VS code) | It's a source-code editor made by Microsoft for window, Linux and macOS. We used Vs code because it has many plugins, fast and a nice interface |
| CMD & Git Bash | A Command-Line maybe it’s not IDE but simply it just to run command. We used it because it fast, simpler, and efficient for large system or when we need to edit files |
| Graphical tools | The tools we used to design our diagrams such as ERD, Context diagram and Use case |
| Data Modeler | It is a free tool or software made by oracle, we used it to create ERDs |
| Moon Modeler | It is a data modeling tool for MongoDB, PostgreSQL and other however, we used it to create our NoSQL diagram |
| Lucid | is website to create diagrams and we used [**Lucid**](www.lucid.app) to create diagram such as Context diagrams and Use cases |

<!--
##### 4.3.6.1 Integrated Development Environment (IDE)
IDE is software or application to build other applications and it has tools and graphical user interface (GUI) to help developer.

##### 4.3.6.2 Visual Studio Code (VS code)
It's a source-code editor made by Microsoft for window, Linux and macOS. We used Vs code because it has many plugins, fast and a nice interface.

##### 4.3.6.3 CMD & Git Bash
A Command-Line maybe it’s not IDE but simply it just to run command. We used it because it fast, simpler, and efficient for large system or when we need to edit files.

##### 4.3.6.4 Graphical tools
The tools we used to design our diagrams such as ERD, Context diagram and Use case.

First **Data Modeler** is a free tool or software made by oracle, we used it to create ERDs. Second **Moon Modeler** is a data modeling tool for MongoDB, PostgreSQL and other however, we used it to create our NoSQL diagram. Lastly [**Lucid**](www.lucid.app) is website to create diagrams and we used [**Lucid**](www.lucid.app) to create diagram such as Context diagrams and Use cases.
-->

##

#### 4.3.7 Summary
To sum up, we will use **Front-End** tools like **HTML**, **CSS**, and **JavaScript** to design our interface. We also will use things like **jQuery** to cut or reduce time because it will reduce the code that we need to write like animation or event handling moreover, it’s fast, free and small.

After building our front-end we need to build our **Back-End** to handle all the requests, responses, and database. **Node.js** is what we will use for server-side because it is free, runs on various platforms , node.js uses JavaScript so we don’t need to learn new language, however, the main reason we chose **Node.js** is because of **Express.js** which is framework of node.js. We think Express.js will reduce coding time and effort required to build out project because express.js provides simple routing for requests made by the client and provides middleware that is responsible for making decisions based on the request and response by the client. On top of that, we will use **Embedded JavaScript Templating (EJS)** because our website needs to deal with a lot of HTML output and generated real-time updates like add or delete courses. Before talking about database, we will **Mongoose** because we think it will help us to reduce time in terms of managing schema, validation, and relationships. According to Mithun Satheesh, B. J. (2015) many companies used node.js such is PayPal, LinkedIn, eBay.

on the other hand, building **database** is much simpler compared to back-end especially nowadays,  because databases are in cloud such as **Atlas** which we will use. We chose atlas because it has many features such as it’s free, fast and you can store up to 500 collections and you can create 100 databases moreover, you can pay if you more space. Atlas also provides **Security** by using **Authentication**, **Authorization**, **Encryption**, and more therefore, we don’t need to start from scratch we just need to do simple security processes. However, Kristina Cbodorow (2013) said that MongoDB has two main goals which is Easy of Use and Easy Scaling.

Finally, **Network Configuration** is last and the easiest part which all we need to do is deploying our website online using **Heroku** platform. We will use Heroku because it’s free, simple and provide some security or at least for small project `Figure 45`.

![Figure 45](https://user-images.githubusercontent.com/56771415/189238932-a73fc1b4-db5a-48f1-af98-6de6924b6ebc.png)

##

#### 4.4 Conclusion
Challenges or problems we faced in this project were more than we expected in both design and development. The first challenge in the design phase was designing a user interface (UI) for both **Low-Fidelity** and **High-Fidelity**. The problem was we needed to design the UI according to **Design Principles** and **Accessibility** and, that took a lot of time from reading previous courses or articles online. The second problem was creating **Level 0** and **Level 1 diagrams**, because level 0 diagram depends on context diagram and level 1 diagram depends on level 0 therefore, if we change context diagram, we need to create all of them from the start and that’s what happened which took a lot of time.

 However, for **Development** phase we didn’t face a lot of challenges because we knew all the technologies that’s we need to develop our project but, we may change a few technologies or tools such as choosing between SQL or NoSQL database. On the other hand, **Programming Language (Front-End & Back-End)**, **Network configuration** and **Other Technologies** will remain the same. Regarding the database type **Distributed** or **Centralized** we will use **Atlas** which is **NoSQL** database, and they will take care of our data, therefore, we don’t need to think about Centralized Database or Distributed Database but if an organization want to use, we recommend using Distributed Database because there are many campuses, and every campus should have their own database.

 Lastly, **Graphical Tools** were one of the biggest problems we faced because most of them are not free, such as **Moon Modeler** which we used to create our ERD for NoSQL data and [Lucid](www.lucid.app) which we used to create other diagrams such as **level 0**, **1 diagrams** and **Use case**. **Moon Modeler** was free for a limited time (14 days) therefore, we need to create our database within 14days, which was hard because we can’t change it later. Lucid.app on the other hand, there is no limitation on time but there is on how much you can use, such as how many pages you can use or how many shapes you can put in the pages. 

##

### 4.5 Project Roadmap
`Figure 46` Shows the whole Roadmap.

![Figure 46](https://user-images.githubusercontent.com/56771415/189240460-25574083-ba8c-4c52-abbf-1efb9c3c9fdc.png)

#### 4.5.1 Initiate Phase
![Figure 47](https://user-images.githubusercontent.com/56771415/189240558-84397b38-f715-44a0-9413-7ea804f44e0d.png)

`Figure 47` shows the Initiate Phase timeline that include Abstract, Introduction, Problem Statement, Project Objectives, Feasibilities, Contribution and Project Deliverables, and References parts.

#### 4.5.2 Planning & Analysis Phase
![Figure 48](https://user-images.githubusercontent.com/56771415/189240629-9b8b3ea7-f880-45cf-b6ca-7e2adfc1bd6b.png)

`Figure 48` shows the Planning & Analysis Phase timeline that include Abstract & Introduction, Methodology Selection & Discussion, Flowcharts, Context Diagrams, Entity Relationship Diagrams, Learning, Building a sample Databases, Functional and Non-Functional Requirements, Time & Cost & Risk Managements, and WBS parts.

#### 4.5.3 Design Phase
![Figure 49](https://user-images.githubusercontent.com/56771415/189240632-a462a65c-ab7f-41fe-8e9e-973840d017d0.png)

`Figure 49` shows the Design Phase timeline that include Abstract & Introduction, JSON, ERD's, UI Designs (Low & High Fidelities), Design Principles, HTA, System Descriptions, Level 0 and 1 Context Diagrams, Use Case Diagram, and State Diagram parts.

#### 4.5.4 Implementation Phase
![Figure 50](https://user-images.githubusercontent.com/56771415/189240640-cc95513b-bea2-4b8e-8fe3-0b8dc61d650e.png)

`Figure 50` shows the Implementation Phase timeline that Front-End & Back-End. For this part we used a specific programming language for the Front and Back End in our project. We also used MongoDB for our Database and Heroku for server/hosting.

## Chapter 5: Conclusion
### 5.1 Conclusion
In conclusion, Auto-Register system has two main goals which are every students must have enough courses and students cannot register any course by mistake. We can achieve the first goal by provide the management the data they need to decide how many classes they should open for every course.
The second goal can be achieved by providing a plan for student, because the plan is generated by the system it will be free from mistake and student can modify the plan if they meet the requirements for the course that they want to add.

#### 5.2 Reflection
After the this project, now I can say that I'm more familiar with the structure of building/creating a project from zero. It's really useful and helpful to know how to start a project from the ground and organize/split the work on team members. I learned how to organize my and the team members time by using the MS Project application with helped us to estimate the time we need to work on every part. I also learned how to combine everything I learned in my previous 4 years in one project and now it makes since of why having diagrams which it means it saves a lot of time from the start instead of doing it without it. It really helped us to reduce time and errors from the start of the project.

#### 5.3 Future Scope
In the future, we are going to develop or implement the project (website) based on the plan we decided. From creating an interface , back-end, database and deploy the website online. We will divide the work equally between us and gives everyone the part he is expert or has experience on. However, to implement the project we need to learn new technologies such as React or Next.js for front-end and we need to learn how the server works in term of request, response, and process request time to control the speed of our website. Also, we will add more features and capabilities to our website like how many hours lest for student.

## References
- [1] 	“Usability testing on website wadaya,” [Online]. Available: https://iopscience.iop.org/article/10.1088/1742-6596/1165/1/012012/pdf#page=1. [Accessed 13 4 2022].
- [2] 	“Using the Advantages of NOSQL: A Case,” [Online]. Available: https://www.researchgate.net/profile/Divya-Chauhan-4/publication/349110376_Using_the_Advantages_of_NOSQL_A_Case_Study_on_MongoDB/links/6021154d92851c4ed5580298/Using-the-Advantages-of-NOSQL-A-Case-Study-on-MongoDB.pdf#page=1. [Accessed 18 3 2022].
- [3] 	“A Place for Node.Js in the Computer Science Curricu,” [Online]. Available: https://www.researchgate.net/profile/Scott-Frees/publication/271849731_A_Place_for_NodeJs_in_the_Computer_Science_Curriculum/links/54d4db340cf2970e4e63c479/A-Place-for-NodeJs-in-the-Computer-Science-Curriculum.pdf#page=1. [Accessed 13 4 2022].
- [4] 	“Testing a Website: Best Practices” [Online]. Available: https://www.heromotocorp.com/en-in/uploads/Annual_Reports/pdf/20130315113443-pdf-68.pdf#page=1. [Accessed 21 3 2022].
- [5] 	“WebSite Testing. Software Research, Inc.” [Online]. Available: http://www.lieb.com/Readings/evalid%20site%20testing.pdf#page=1. [Accessed 18 11 2022].
- [6] 	"Comparison of JWT and OAuth 2.0 authorisation,” [Online]. Available: https://core.ac.uk/download/pdf/159753962.pdf#page=1. [Accessed 11 10 2021].
- [7] 	“Automated Course Advising System.” [Online]. Available: http://www.ijmlc.org/papers/384-H0018.pdf. [Accessed 19 1 2022].
- [8] 	"Add-on Course Registration System.” [Online]. Available: https://digitalcommons.wou.edu/cgi/viewcontent.cgi?referer=https://scholar.google.com/&httpsredir=1&article=1000&context=computerscience_studentpubs. [Accessed 24 9 2021].
- [9] 	“An Automatic Dialog System for Student Advising.” [Online]. Available: https://cornerstone.lib.mnsu.edu/cgi/viewcontent.cgi?referer=https://scholar.google.com.tw/scholar?hl=en&as_sdt=0%2C5&q=automated+student+registration+scheduling+system&btnG=&httpsredir=1&article=1041&context=jur. [Accessed 16 2 2022].
- [10] 	"Advising for Course Registration: A UAE University,” [Online]. Available: https://www.researchgate.net/profile/Qurban-Memon/publication/270194000_Advising_for_course_registration_a_uae_university_perspective/links/54ab7ada0cf2bce6aa1d880d/Advising-for-course-registration-a-uae-university-perspective.pdf. [Accessed 27 9 2021].
- [11] 	“ORIENTAL JOURNAL OF COMPUTER SCIENCE,” [Online]. Available: http://www.computerscijournal.org/vol9no2/development-of-online-student-course-registration-system/. [Accessed 14 3 2022].
- [12] 	"A model for web-based course.” [Online]. Available: https://www.researchgate.net/profile/Indratmo-Indratmo/publication/263481101_A_model_for_web-based_course_registration_systems/links/5745777a08ae9f741b4091a6/A-model-for-web-based-course-registration-systems.pdf. [Accessed 18 2 2022].
- [13] 	“MongoDB The Definitive Guide.” [Online]. Available: https://books.google.ae/books?hl=en&lr=&id=uGUKiNkKRJ0C&oi=fnd&pg=PP1&dq=mongodb+&ots=halARddUwk&sig=XLx8N4R6XYqgknRPfk9qLdcaDrk&redir_esc=y#v=onepage&q&f=false. [Accessed 12 4 2022].
- [14] 	"Node.js, MongoDB, and AngularJS Web Development.” [Online]. Available: https://books.google.ae/books?hl=en&lr=&id=8kTCAwAAQBAJ&oi=fnd&pg=PR6&dq=node+js+mongodb&ots=Hh5ml0PBcz&sig=7Rj2hGLZiknxVFxji92U0r6sJA8&redir_esc=y#v=onepage&q=node%20js%20mongodb&f=false. [Accessed 23 5 2021].
- [15] 	"Web Development with MongoDB and NodeJS. ” [Online]. Available: https://books.google.ae/books?hl=en&lr=&id=4QKACwAAQBAJ&oi=fnd&pg=PP1&dq=node+js+mongodb&ots=SdUDVKqgrx&sig=PEwyqIeQOAY6r_z-Jmja44z-fIU&redir_esc=y#v=onepage&q=node%20js%20mongodb&f=false. [Accessed 24 4 2021].


<!--

### 4.2	Testing Techniques
In this section we will explain how we test our product which is a web application, and how we may deploy the application in the cloud. In this part we will not test the product in terms of code like last assignment, therefore we will not use things like Black-Box or Grey-Box but the test will be more general or from user perspective, for example usability test or functionalities test.

- Testing
The goal of the testing phase is to ensure that the product is ready for launch. Therefore, the product will be tested in various aspects with different techniques and the aspects are functionality testing, usability testing, UI (User Interface) testing, compatibility (Configuration) testing and testing in controlled environment.   
Functionality Testing
First, functional testing is where we test or check if the system operates correctly without any problems. In this part we will do the following testing: Links testing, Forms testing, Cookies testing.

- Links Testing:
In this part we will test emails, links pages that are not referenced, no broken links and Outbound links.

- Forms Testing:
In this part we will test data input, form option (drop-down list) and required input.  

- Cookies Testing:
In this part we will test the application with disabled cookies, with enabled cookies and check the security aspects when removing the cookies.

#### 4.2.1	Functionality Testing Result
- Links Testing Result as shown in `Table 4`.

![Table 4](https://user-images.githubusercontent.com/56771415/188356837-5748cc03-2a24-4cf1-bd4c-d8f1e49c1233.png)

- Discussion
First email testing, we used email in three places, when the user registered in the system `Figure 4`. Second, when the user logins the system will send the authentication code to the email `Figure 5`. Third, when the student adds any new course `Figure 6`. For the three other tests they all success, we referenced all the pages, we didn’t have broken links and we don’t have any outbound links.

![Figure 4](https://user-images.githubusercontent.com/56771415/188357130-a92ace4a-83d5-4644-b635-9da090aafc77.png)
![Figure 5](https://user-images.githubusercontent.com/56771415/188357573-c7431b05-a755-4afc-9ab8-07c29a13f74c.png)

![Figure 6](https://user-images.githubusercontent.com/56771415/188357161-599fae26-0876-421e-9086-5ccdea85bff3.png)

- Forms Testing Result as shown in `Table 5`

![Table 5](https://user-images.githubusercontent.com/56771415/188357406-1b35ebd2-e663-484d-ac0d-dce3ff4917e5.png)

- Discussion
We have three pages that need to be tested and they are login, signup and authentication. Login page and authentication page their data input has no problem, but signup page `Figure 7` has many problem that why we failed in this test. For example, we can register a user using numbers for first name and last name, therefore we need to add validation. Also, if we enter any letter in semester field the system will freeze and the system will need to be restarted because we need to enter a number but there is no validation. Form option and required input are both successful in the test phase for all pages.

![Figure 7](https://user-images.githubusercontent.com/56771415/188357501-ac1bc582-1a22-44ed-ad8a-1adc150827e0.png)

- Cookies Testing Result as shown in `Table 6`

![Table 6](https://user-images.githubusercontent.com/56771415/188357748-09651b2e-3143-4ef9-bb9b-5fc6be4593e6.png)

- Discussion
We used cookies in the project to increase the security aspect. Therefore, the user with no cookies and the user that is using the wrong cookies should not be able to enter the application. First, we test the application with disabled cookies and the result was success because we cannot pass authentication page and it does not matter what the code, we enter it will always response with "Invalid code" as we can see in `Figure 8` and that because to register authentication code in the database we need to use cookies. Enabled cookies test was a success because the website operated with no problem. Finally, removing the cookies test also passes the test because whenever we delete it will redirect the user to the login page.

![Figure 8](https://user-images.githubusercontent.com/56771415/188357899-a8c90a7d-f0ee-4062-909e-abe86833f21e.png)

- Functionality Final Testing Result as shown in `Table 7`

![Table 7](https://user-images.githubusercontent.com/56771415/188358002-0afcf44c-d545-499d-a1e9-44d736096a89.png)

- Discussion
To summarize the result of the functionality test, we succeeded in two tests, which is links test and cookies test but we failed in one test which is form test. Therefore, according to the results the system needs more validations on the signup page and beside that everything operates with no problem.  

#### 4.2.2	Usability Testing
Second, usability testing is where we evaluate our web page by acting like we are the users. This test helps us to know about the user perspective and according to (Arthana, 2019) good usability ensure users are happy and will return to using the system, However, it only consist of two part which are the navigation test and content test.

- Navigation testing:
This test consists of two parts which are checking if all pages are understandable and easy to use, and if there is an access to home page and logout button from all pages.

- Content testing:
In this test we need to check spelling mistakes and grammar, images or inputs are placed properly with proper sizes, using the right color palette of the site and font sizes.

#### Usability Testing Result
- Navigation Testing Result as shown in `Table 8`

![Table 8](https://user-images.githubusercontent.com/56771415/188358173-4c5c5da4-53da-41b8-95d9-a12c7d479456.png)

- Discussion
I think we made the website very easy to understand by removing any additional images and animation, and for the second point the user can access the home page and logout button from any page as we can see in `Figure 9`.

![Figure 9](https://user-images.githubusercontent.com/56771415/188358239-dff402c8-1b20-4369-8157-59a6802a024c.png)

- Content Testing Result as shown in `Table 9`

![Table 9](https://user-images.githubusercontent.com/56771415/188358284-f5026f56-a622-4927-b51f-4a7b91267ed6.png)

- Discussion
For the first point, we don’t have grammar or spelling mistakes because our website is very simple and most of the time we use one word or two  to explain the instructions. For the second point, we don’t have any images but for inputs we used bootstrap therefore bootstrap is responsible for the size. For the third point, I tried to use the right color such as green color to register a course as we can see in `Figure 11` also, I used some icons as we can see in `Figure 10`.

![Figure 11](https://user-images.githubusercontent.com/56771415/188358501-d23ecc4a-159e-4a21-bde2-a3ef7cb06257.png)
![Figure 10](https://user-images.githubusercontent.com/56771415/188358507-1987bf7a-f794-4505-b4e4-41eed518b52b.png)

- Usability Final Testing Result as shown in `Table 10`

![Table 10](https://user-images.githubusercontent.com/56771415/188358553-c528bed9-1b02-40f7-8efa-0a05551de78f.png)

- Discussion
To summarize the results of the usability test, we succeeded in both navigation testing and content testing. Therefore, according to the results the project succussed in usability test.

#### 4.2.3 (User Interface) Testing
Third, UI testing is where we test the graphics user interface of our product. In this part we will test the website with different screen resolutions such as personal computer  (1920 ×1080 dot), laptop (1280 × 800 dot) and mobile (2532 x 1170 pixels).

- UI (User Interface) Final Testing Result as shown in `Table 11`

![Table 11](https://user-images.githubusercontent.com/56771415/188358750-fd5c9983-980c-449e-ac2a-96061284e89f.png)

- Discussion
We developed the application using a PC which is 1920 x 1080, therefore, the application would operate without any problems if we used a similar resolution or higher. However, for laptop and mobile the application is not compiled with them and has many problems, for example, as we can see in `Figure 12` or `Figure 13` the button for register is disappeared.

![Figure 12](https://user-images.githubusercontent.com/56771415/188358794-f40664bf-cc23-49bc-aa92-c67cca4d131a.png)

_^ Laptop resolution_

![Figure 13](https://user-images.githubusercontent.com/56771415/188358810-e6cc9e33-d711-4b5a-a2ac-08ac766db5f4.png)

_^ Mobile resolution_

#### 4.2.4 Compatibility Testing
Fourth, in this test we will check these three points which are using different operating system, different browser.

- Compatibility Final Testing Result as shown in `Table 12`

![Table 12](https://user-images.githubusercontent.com/56771415/188359485-9e6facaa-0c0d-49a4-b500-d97cbe5044c7.png)

- Discussion
The application operates with no problems in most browsers because we didn’t use any advanced features and as (Miller, 2000) said the website must use only those constructs that work with the majority of browsers. But this still leaves room for a lot of creativity. We failed in OS test because the application until now is local and not online so we can’t test it in other operating systems.

// #### 4.2.5 Testing in Controlled Environment & Survey
// We cannot perform the last two tests because the application is not completed and we didn’t deploy it to the cloud. 

#### 4.2.5	Final Testing Result
Final Testing Result as shown in `Table 13`

![Table 13](https://user-images.githubusercontent.com/56771415/188359640-d8d6f8c4-cc46-405f-ab46-259443967aaf.png)

- Discussion
As we can see in Table 13 the product failed in most tests and that was what we expected because the project was not completed. So, according to the result the project must return to the development stage or the project must be canceled because it’s not ready to be launched.     


### 4.3	Validation Techniques
Validation is the process of checking if the requirement actually met the product functionality or in other word, did we build the right product? The main goal of the validation phase is to determine if the final product is correct or no. To achieve that we must check the requirement we set before we build the product. Validation phase can be done during or after the testing phase.

- Requirements

Functional requirementsas shown in `Table 14`

![Table 14](https://user-images.githubusercontent.com/56771415/188359778-df6446c9-e053-4d06-836c-5bb74691fea8.png)

Non-Functional Requirementsas shown in `Table 15`

![Table 15](https://user-images.githubusercontent.com/56771415/188359821-73f8e0fc-7beb-4ee0-bbb8-7e9a48601ab8.png)

### Discussion
After listing all the requirements in Table 14 and Table 15, we have concluded that we didn’t pass or we failed at this stage. 
We failed due to different reasons first, we will start with functional requirements. As we can see in Table 14 we completed nine of the fifteen requirements, but the six requirements that we didn’t complete are very critical and have a huge impact on the application. For example, requirements 10 and 11 in Table 14 are not completed but they are very important because many student repeat courses or their GPA less than three and messing these functionalities will affect the system in many ways, such as, how many courses the student can take or what courses he must take.
Second non-functional requirements, as we can see in Table 15, we did not complete most of the requirements, we only completed two of twelve and maybe non-functional requirements are not very important but it will improve the user experience very much especially requirements 5 and 7 because most of people prefer mobile over laptop or personal computer, also nowadays we can see dark mode almost in every application or website.
In conclusion, we did not complete the requirements because of many reasons but the main reason is our estimation was wrong for most of the tasks in terms of how much time the task needed to complete. For example, requirement 1 in Table 14 was supposed to be easy and should not take long time but in reality we spend too much time on it and the estimation was wrong because we did not consider the issues related the requirement, such as fixing bugs or errors related to the version we are using and many others. I think there are many other reasons such as lack of teamwork, not all of us are good at programming, but incorrect estimation was behind the failure of this project. 


### 4.4 Design
In the 1st GP course, we discussed the five design principles rules `Figure 14` and they are Visibility, Feedback, Affordances, Constraints, and Consistency. Therefore, in this section we will compare our application with the design principles rules we set before. 

- Visibility: This principle is responsible for how the product or what the product is and what used for. 
- Feedback: This principle is responsible for making a clear response on what has been accomplished by the user. 
- Affordances: This principle is responsible for how the product is used.
- Constraints: This principle is responsible for restricting the possible actions that can be performed.
- Consistency: This principle is responsible for creating a uniform interface or having similar operations and similar elements for similar tasks.

![Figure 14](https://user-images.githubusercontent.com/56771415/188360019-5aa40797-b12d-4bb4-bc30-b9737167bc78.png)

#### 4.4.1	Visibility
The main goal was to make the application as simple and clear as possible so the user knows what to do without any help from teachers or other staff. We believe we achieved that in all pages except in Authentication page because the idea was to make the page with just one button and one label `Figure 15` but at the end we added a timer, one more button, and more text `Figure 16`.

![Figure 15](https://user-images.githubusercontent.com/56771415/188360188-78285b39-c0ab-4b0e-9177-a3b3c90bdc92.png)

_^ Authentication before development_

![Figure 16](https://user-images.githubusercontent.com/56771415/188360195-e098869a-2cad-4dac-b6e2-78c020943f1c.png)

_^ Authentication after development_

#### 4.4.2	Feedback
For feedback we set three goals user location within the system, notify the user whenever he performs some action, such as submit or register or send notification when he successfully registers, and for the last goal notify the user when he does some unwanted action.

- We achieve the first goal user location within the system as we can see in `Figure 17`

![Figure 17](https://user-images.githubusercontent.com/56771415/188360285-4a0469b8-7a47-437a-9fac-48593cb94844.png)

- For the second goal which notify the user whenever he perform some action we add window prompt in some pages for example it will window box will appear if the user click on register `Figure 19` or when the admin want to register a new student or staff `Figure 18` but I don’t think we success in this goal because there are still many thing user can do and he will not be notify such as logout.

![Figure 18](https://user-images.githubusercontent.com/56771415/188360375-e8d40b14-cfb1-478e-be3f-a09b3d37cab3.png)

_^ Window prompt appears when click on register a new student or staff_

![Figure 19](https://user-images.githubusercontent.com/56771415/188360369-bc80209a-04fe-4b4b-bd42-d512d57b2535.png)

_^ 19 Window prompt appears when click on register courses_

#### 4.4.3	Affordances
We set two main goals, the first one was to use icons or write text that anybody can understand and know how to use it, and the second goal was to remove any unnecessary part such as images and videos.
-	To achieve this goal we used simple icon such as excel `Figure 21` icon in report page and very simple text `Figure 20` but I don’t think we successfully achieve this goal because there are some part where the user may be confused from the text or icon such as Home and logout as we can see in `Figure 22`.

![Figure 21](https://user-images.githubusercontent.com/56771415/188360603-8223f401-627b-4504-92fa-9248cef60066.png)

_^ Excel icon to download the report_

![Figure 20](https://user-images.githubusercontent.com/56771415/188360611-c08ec211-c8d2-41f0-97aa-2263df9c184b.png)

_^ Button to register courses_

![Figure 22](https://user-images.githubusercontent.com/56771415/188360696-01ec59cc-88b9-4813-bdcd-defb1d207881.png)

_^ RegisterStaff page_

#### 4.4.4	Constraints
The goal was to reduce human error as possible, therefore we use validation in three-level (interface, server, database) but this was not enough because there are still many bugs, for example, if the user write a certain email in RegisterStaff page `Figure 22` the system will be frozen some bugs we couldn't fixed due to the deadline.

#### 4.4.5 Consistency
For the last rule we design the application to have only one background on all pages, use similar color for buttons that have similar purpose such as login `Figure 23` and verify `Figure 24`.

![Figure 23](https://user-images.githubusercontent.com/56771415/188360962-a70597dd-cfe4-4895-8e37-128134491982.png)

![Figure 24](https://user-images.githubusercontent.com/56771415/188360965-46c1e5b9-3823-499a-ba49-57cff7d6e0ac.png)

#### 4.4.6	Accessibility
For accessibility we set many goals:
-	We will use Alt Text to images or icons because people with this problem usually rely on
assistive technologies such as Screen Readers and refreshable Braille Readers.
-	Avoid using thin fonts and we will try to avoid adding links to images that can’t support Alt Text.
-	Avoid using Place Holder because it’s usually gray and small which make it hard to see.
-	Avoid Automatic Media and Navigation.
-	Color- blind / dark-mode

#### Discussion
In this section we will discuss the main reasons we failed in design principles and accessibility. I think the first and the main reason is time management, from both the group members and  HCT management that setup this course. First, let’s talk about the group members because this is the first big project, we did not have enough experience to estimate or give an accurate time for each task, for example giving a certain task a small amount of time but when we develop the project,  we spend more time in it than we expected like routing and fixing bugs. For HCT management I believe that when they setup the course time they did not consider some student may have problem or some of them may drop the course or they did not have enough skill to develop the project and all that reasons led to put the work in other members which cause a delay or in this case most of the goals were unsuccessful.

### 4.5	Hierarchical Task Analysis (HTA)
In the 1st GP course we provide HTA diagram therefore, in this section we will compare the previous diagram with the new one also we will discuss why we add two more HTA diagrams.

Because we explained the symbols and notations of HTA in the previous assignments we will not explain in detail in this section.

_(If you want the detailed HTA Diagrams so bad just text me and i'll send it for your research :D)_

#### 4.5.1 HTA for student (Register)
In this section we will talk about how students can register new courses.

Tasks break down (Before Development):

0. To register

1. Enter URL 

2. Login

  2.1. Enter the Authentication code   

3. Click register

  3.1. Select plan
	
  3.2. Edit course

  3.3. Delete course

4. Click confirm

Diagram (Before Development) `Figure 25`:

![Figure 25](https://user-images.githubusercontent.com/56771415/188361603-cfeeb5d9-7131-477d-b31a-08b2bec2a5ee.png)

Tasks break down (After Development):

0. To register courses

1. Enter URL

2. Login

  2.1. Enter the Authentication code

3. Click Register courses

  3.1. Select courses

4. Click Register

  4.1. Click OK on window prompt

  4.2. Click Ok on notification prompt

Diagram (After Development) `Figure 26`:

![Figure 26](https://user-images.githubusercontent.com/56771415/188361709-a36cb0ff-5536-4607-b1a3-0789ed51732c.png)

- Discussion

As we can `Figure 25` and `Figure 26` both of them are HTA diagrams for student to register courses. The first two step (1 - 2) are the same because we did not change the authentication process in term of operation. However next steps are different because we change from generating plans to generating courses and we removed delete and edit plan, and these change was needed for several reasons which we will discuss it later. Also we add two more steps in which is 4.1 and 4.2, we added these steps to reduce human errors.
At the end both of them has their advantage and disadvantage. For example the old diagram Figure 25 is better in term of operation because the user can edit and delete a plan which is not available in new diagram Figure 26. However, the new diagram also has some advantage such as it’s more stable because there are step 4.1 and 4.2 also it’s better in term of fixability because you can select each course instead of generating a plan.       

#### 4.5.2 HTA for admin (Add a New User)
In this section we will talk about how admin can add new user.

Tasks break down:

0. To add new user

1. Enter URL

2. Login

  2.1. Enter the Authentication code

3. Click Register stuff

  3.1. Fill all the input

4. Click on Create

  4.1. Click OK on window prompt

  4.2. Click Ok on notification prompt
  
Diagram `Figure 27`:

![Figure 27](https://user-images.githubusercontent.com/56771415/188361887-5e3377cd-2e71-4837-9394-c85fa420db7b.png)

#### 4.5.3 HTA for admin (Download a Report)
In this section we will talk about how admin can download a report.

Tasks break down:

0. To add new user

1. Enter URL

2. Login

2.1. Enter the Authentication code

3. Click on report

4. Click on the excel icon

Diagram `Figure 28`:

![Figure 28](https://user-images.githubusercontent.com/56771415/188362016-e839ab9f-128a-4e84-bb84-dc41ed482b97.png)

- Discussion

In the previous reports we just add one HTA which if for students however, it was not enough to explain how the admin can interact with the system. As we can see in `Figure 27` and `Figure 28` both of them has the same first two steps which is Enter URL and Login in fact all roles in the system must do these two steps and after that each roles has different step depending on the service or the task they want to do as we can see in `Figure 29`.

![Figure 29](https://user-images.githubusercontent.com/56771415/188362100-3ef70157-86d2-4da9-ab7e-dbb6aca02f05.png)

### 4.6 Pages
In this section we will discuss about how each page is function and operate in term of design or client view (front-end) which mean will not focus in the validation or JavaScript in each page but instead of that will talk about html, CSS and some EJS. As we can see in `Figure 30` we have eight pages which are **login.ejs**, **authentication.ejs**, **signup.ejs**, **index.ejs**, **register.ejs**, **report.ejs**, **showCourse.ejs** and **studentList.ejs** however we did not include **main.ejs** file because it’s not page but it act like MasterPage in aspx which mean every page will take some html, CSS, Bootstrap code from it like background color and footer. Therefore we will explain **main.ejs** file in EJS section.

![Figure 30](https://user-images.githubusercontent.com/56771415/188735077-50d78d36-2d8d-4339-acdd-3b95973386db.png)

#### 4.6.1 login.ejs
The main object of this page is to check if the user has an account or not, as shown in `Figure 31`.
The idea of this design is to make the page obvious and not confuse the user, therefore we put the form in the middle and we did not use any images that will distract the user. For the coding part we mainly used Bootstrap and some CSS for animation and other effect such as hover. 

![Figure 31](https://user-images.githubusercontent.com/56771415/188736671-a519eca9-9a4d-4a7d-89aa-49564bec8e73.png)

#### 4.6.2 authentication.ejs
The main object of this page is to authenticate the user and we put a timer so the authentication code will be deleted after the timer end and send the user to login page as shown in `Figure 32`. For the coding part we mainly used Bootstrap and some CSS for animation and other effect such as hover. Also we used JavaScript for the timer `Code 1`.

![Figure 32](https://user-images.githubusercontent.com/56771415/188740504-1d0115ff-bd7e-4e44-ba67-3d765b8268b6.png)

```C#
/** Timer for Authentication */
  function startTimer(duration, display) {
    var timer = duration,
      minutes,
      seconds;
    let executing = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
      if (timer == 0) {
        clearInterval(executing);
        display.textContent = minutes + ":" + seconds;
        location.assign("/logout ");
      }
    }, 1000);
  }

  window.onload = function () {
    /*How many minutes you want*/
    var fiveMinutes = 60 * 5,
      display = document.querySelector("#time");
    display2 = document.querySelector("#time-shadow");
    startTimer(fiveMinutes, display);
    startTimer(fiveMinutes, display2);
  };
  ```
// ![Figure 33](https://user-images.githubusercontent.com/56771415/188740525-f1d96179-5abb-483e-b02e-35a4ef656d2a.png)

#### 4.6.3 index.ejs
In `Figure 33`, the main object of this page is to show different services the application provide however the services depends on user rule. Also we can see logout to logout, user email to make sure that the user want to login this account and Home text as a link which redirect to home page. For the coding part we mainly used EJS so we can use JavaScript in html page. For example, as we can see in `Code 2` we used if statement to show the buttons(services) which depends on user rule. 

![Figure 33](https://user-images.githubusercontent.com/56771415/188745215-5e5ff369-3710-4c51-bf6e-9a4d6a87d34d.png)

```C#
<link rel="stylesheet" href="/css/index.css" />
<div class="container mt-5">
  <% if (user.role==="AD"){%>
  <a class="button1" href="/signup">Register stuff</a> <%}%> <%
  if(user.role==="AD"){%> <a class="button1" href="/report">Reports</a><%}%>
  <%if(user.role==="AV"){%>
  <a class="button1" href="/studentList">Student List</a><%}%>
  <%if(user.role==="ST"){%>
  <a class="button1" href="/register">Register courses</a>
  <a class="button1" href="/showCourse">Show courses</a>
  <%}%>
</div>
```

#### 4.6.4 signup.ejs
In `Figure 34`, the main object of this page is to add a new user to the system. For the coding part we mainly used Bootstrap and some CSS for animation and other effect such as hover. Also we used some JavaScript with Document Object Model (DOM) as we can see in `Code 3` to show and hide some text box depending on the role the user pick.

![Figure 34](https://user-images.githubusercontent.com/56771415/188746340-2d47b058-f184-4778-bf85-12b19c135683.png)

```C#
function dropboxAdvisorCheck() {
    if (form.role.value == "AV" || form.role.value == "AD") {
      document.getElementById("advisor_dropbox").style.display = "none";
      document.getElementById("semester").style.display = "none";
    } else {
      document.getElementById("advisor_dropbox").style.display = "block";
      document.getElementById("semester").style.display = "block";
    }
  }
```

#### 4.6.5 report.ejs
In `Figure 35`, the main object of this page is to display the report and download the report in excel file. For the coding part we mainly used CSS for table design. Also we used JavaScript to create a function that convert html table to excel file as we can see in `Code 4`.

![Figure 35](https://user-images.githubusercontent.com/56771415/188746522-7ee3f0a0-fc9d-4af9-b427-df2ba6e091ea.png)

```C#
function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById("tbl_exporttable_to_xls");
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl
      ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
      : XLSX.writeFile(wb, fn || "Report." + (type || "xlsx"));
  }
```

#### 4.6.6 studentList.ejs
The main object of this page is to list all the student for the advisor as shown in `Figure 36`. For the coding part we only used Bootstrap.

![Figure 36](https://user-images.githubusercontent.com/56771415/188746694-8cda101c-1931-41b9-ad1d-7cab6e3458dd.png)

#### 4.6.7 studentList.ejs
In `Figure 37`, the main object of this page is to show courses for students depending on the semester and register these courses. For the coding part we used Bootstrap and CSS also we used some ejs to display the courses from the database as we can see in `Code 5`.

![Figure 37](https://user-images.githubusercontent.com/56771415/188746788-ac9e43d8-1467-438b-ad48-51aa46b91ed1.png)

```C#
<% course.forEach(element => {%>
  <tr>
    <td class="column2"><%= element.code%></td>
    <td class="column1>
      <span style="float: left"› <%= element.courseName%> </span>
      <span style="float: right; padding-right: 20%"> 
	 <input class="size-check" type="checkbox" value=<%=element.code%> />
      </span>
    </td>
  </tr> 
```

#### 4.6.8 showCourse.ejs
In `Figure 38`, the main object of this page is to show the courses he registered in. For the coding part we used Bootstrap and CSS also we used some ejs to display the courses from the database as we can see in `Code 6`.

![Figure 38](https://user-images.githubusercontent.com/56771415/188747915-26e318c8-869a-4fa9-9bf2-af903c988952.png)

```C#
<link rel="stylesheet" href="/css/showCourse.css" />

<div class="container-sm mt-5">
  <form action="">
    <table class="table100-head">
      <thead>
        <tr>
          <th scope="col">Code</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
      <% course.forEach(function (item, index) {%>
        <tr>
          <td class="column2"><%=item.code%></td>
          <td class="column1"><%=item.courseName%></td>
        </tr>
        <%});%>
      </tbody>
    </table>
  </form>
</div>
```

## 4.7 Implementation
In this section we will the explain the Development/Implementation phase in detail such as programing language, database, framework, tools, modules and the technologies we used in this application.

#### 4.7.1 Technologies
In this section we will list the technologies we used in this project and explain why we used these technologies. 

- **Node.Js**:

The main reasons we chose Node.js because based on JavaScript and according to (Frees, 2015) Node.js has many advantages such as it serves all requests in a single thread and  all HTTP requests are served out of the same thread.

- **MongoDB**:

The main reasons we chose MongoDB because it has less restriction in term of CRUD operation for example, in SQL sometimes it will prevent the user from deleting a row because of the foreign key or the primary key relationship but in NoSQL this problem is not exist because there is no foreign key.  Also according to (Chauhan & Bansal, 2017) MongoDB has many advantages such as ease of use because it is very easy to install , maintain and configure.  

- **Express**:

Is a framework for Node.js that provide many features such as modules like HTTP, middleware body-parser therefore using these feature we reduced the needed to develop and building the application.

- **HTTP**:

Is a module includes classes, methods and events to create Node.js http server.
Body-parser: is a middleware used to process data sent through an HTTP request body.

- **Mongoose**:

Is a framework for MongoDB which provide many features such Pre/Post middleware’s therefore using these feature we reduced the needed to develop and building the application.

- **EJS**:

Is a templating language allows us to use JavaScript in html pages and the main reason we used it is to display the data in the database to the client.

- **JSON Web Token (JWT)**:

Is a technology to share security information between two parties or according to (Visočnik, 2018) JWT used for “for passing information securely, known as claims between two parties, usually a server and a client”.

- **Bcrypt**:

Is a library used to hash the password and we used it to hash user password also it contain many other function hashing with salt.

- **AutoIncrement**:

Is a module used to generate id which we used it to auto increment user id whenever we create a new user.

- **Validator**:

Is a module used to validate the email and we used this module to validate the email in database level. However this module only validate strings.

- **NodeMailer**:

Is a module used to send emails from our server and we used it because it’s very simple and free.

#### 4.7.2 File structure
File management is essential aspect in every successful project. File management is important because of several reasons such as reusable code, easy to find and maintaining the code and many other reasons and all of them lead to one goal which is saving time.
Most if not all operating systems are using hierarchical file systems. However hierarchical file system has few disadvantage such as it easily led to create many files and it is not efficient or friendly for non-GUI operating system is we can see in `Figure 39` such as MS-DOS. To solve these problem we focused in two things which are reducing the number if files by placing the files together and create file name that make sense. At the end we came up with five files and three files in the root directory `Figure 40`.

![Figure 39](https://user-images.githubusercontent.com/56771415/188748598-0a3f5301-1e41-4b30-ab21-7071aa138cd9.png)

![Figure 40](https://user-images.githubusercontent.com/56771415/188748607-4eb6ab94-7327-41a4-82f1-fa684f43e391.png)

##### 4.7.2.1 app.js
This file is what the server will run and contain many things for example the frameworks that we are using (Express.js and Mongoose) or some middleware (cookieParser) and tools such as ejs as shown in `Code 7`.

```C#
const express = require("express"); //Framework
const expressLayouts = require("express-ejs-layouts"); //Tool
const mongoose = require("mongoose"); //Framework
const cookieParser = require("cookie-parser"); //Middleware
const app = express();
const port = process.env.PORT || 3000;
const { checkUser } = require("./middleware/authMiddleware");

// to make port dynamic which mean you can use i server port not just host
require("dotenv").config();

//middleware
//parse the url data into object  (ex:eq.body.id)
app.use(express.urlencoded({ extended: true }));

// it take any json data that comes from request and parse it into javascript object so we can use it (ex:eq.body.id)
app.use(express.json());
// To use cookies
app.use(cookieParser());
//so we dont need to write all the public path such as css path
app.use(express.static("public"));

//database
const dbURI =
  "mongodb+srv://abdullah-admin3:database000@cluster0.hou89.mongodb.net/hctDB"; //Databse Connection
mongoose.connect(dbURI, {
  /*     useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, */
});
```

##### 4.7.2.2 package.json
This file contain all the dependencies such as nodemailer module also it devDependencies which is the dependencies that help the developer but not essential or important to run the application like nodemon, also it contain scripts that we are using for instance we are using script the help us to start the application using nodemon tool s shown in `Code 8`.
Note: This file is auto generated and it updated automatically whenever we add new dependency. 

```C#
{
  "name": "Project_v1",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": { // <-------
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js" // <-------
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": { // <-------
    "alert": "^5.0.10",
    "assert": "^2.0.0",
    "bcrypt": "^5.0.1",
    "connect-flash": "^0.1.1",
    "cookie-parser": "^1.4.6",
    "dotenv": "^10.0.0",
    "ejs": "^3.1.6",
    "express": "^4.17.2", // <-------
    "express-ejs-layouts": "^2.5.1",
    "express-fileupload": "^1.2.1",
    "express-session": "^1.17.2",
    "jsonwebtoken": "^8.5.1",
    "jwt-decode": "^3.1.2",
    "mongodb": "^4.2.2",
    "mongoose": "^6.1.4",
    "mongoose-auto-increment": "^5.0.1",
    "nodemailer": "^6.7.2",
    "validator": "^13.7.0"
  },
  "devDependencies": { // <-------
    "nodemon": "^2.0.15"
  },
  "description": ""
}


```
##### 4.7.2.3 package-lock.json
This file is similar to **package.json** but with more details and that gives us more control over dependencies. For example in **package.json** file we can see express `Code 9` dependency version 4.17.2 but in **package-lock.json** we can see `Code 10` the same dependency but it has much more details like modules that express has. Therefore we can delete some modules if we don’t use them or if they contain some bugs.
Note: This file is auto generated and it updated automatically whenever we add new dependency.

```C#
"express": { // <-------
      "version": "4.17.2",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.2.tgz", // <-------
      "integrity": "sha512-oxlxJxcQlYwqPWKVJJtvQiwHgosH/LrLSPA+H4UxpyvSS6jC5aH+5MoHFM+KABgTOt0APue4w66Ha8jCUo9QGg==",
      "requires": {
        "accepts": "~1.3.7",
        "array-flatten": "1.1.1",
        "body-parser": "1.19.1",
        "content-disposition": "0.5.4",
        "content-type": "~1.0.4",
        "cookie": "0.4.1",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.1.2",
        "fresh": "0.5.2",
        "merge-descriptors": "1.0.1",
        "methods": "~1.1.2",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "~2.0.7",
        "qs": "6.9.6",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.2.1",
        "send": "0.17.2",
        "serve-static": "1.14.2",
        "setprototypeof": "1.2.0",
        "statuses": "~1.5.0",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      }
    },

```

##### 4.7.2.4 Middlewares
In `Figure 41` there is a folder contain **authMiddleware.js** file which contain almost all the middleware we used in this application. For example `requireAuth()` method used to check if the user is login or authenticate or no as we can see in `Code 11`.

![Figure 41](https://user-images.githubusercontent.com/56771415/188750311-b620a0ac-03e6-4ea4-ba8a-79e7d5950841.png)

```C#
//check if user is authenticate or no
const requireAuth = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;

  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        res.redirect("/login");
      } else {
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};
```

##### 4.7.2.5 Node_Modules
This folder contain all the dependencies material we need to use them as shown in `Figure 42`.
Note: This file is auto generated and it updated automatically whenever we add new dependency. 

![Figure 42](https://user-images.githubusercontent.com/56771415/188750517-659003e3-14c6-4868-86f4-034b622f51c5.png)

##### 4.7.2.6 Public
This folder contain three other folders and they are css folder, img folder and js folder as shown in `Figure 43`. The css folder contains all the css files we used in this project and img folder contain all the images we used in this project and for the last folder which is js it contains **validation.js** and **otherFunction.js**. The first file which **validation.js** file is responsible for validation for all validation level (interface, server, database) and **otherFunction.js** file contain many different functions like `randomString()` which we will mention it in `Code 20`.

![image](https://user-images.githubusercontent.com/56771415/188750777-45177c78-2a8b-4c9e-a0d3-bd395eb32c85.png)

##### 4.7.2.7 Views
This folder contains all ejs files as shown in `Figure 44`.
Note: read ejs section for more details.

![Figure 44](https://user-images.githubusercontent.com/56771415/188751056-5f6c190e-e863-4598-9e68-d24dc1be65aa.png)

##### 4.7.2.8 Server
server folder is responsible for server-side operation and it has three folder controllers, models, routes as shown in `Figure 45`.
Note: read controllers, models, routes 
sections for more details.

![Figure 45](https://user-images.githubusercontent.com/56771415/188751176-87048b9b-8152-4250-8971-0c56a50c248c.png)

### 4.7.3 Model-View-Controller (MVC)
At the beginning of the internet most websites were static websites and did not have much organization on the server side, and with time the application became more complicated and harder to maintain. Architectural pattern is a software design pattern that helps developers to structure and organize files, provide reusable and easier to maintain code to the applications.
Model-View-Controller (MVC) is the architectural pattern we will use in our project. 
MVC separates application logic intro three elements which are Model, View and Controller `Figure 46`.

- Model: 
Responsible for the format, core functionality, structure and constraints of the data. However, in our project we used it to create schemas and some functions `Figure 45`.

- View: 
Responsible for displaying the information to the user, which is the template/layout of our website `Figure 45`. 

- Controller: 
The link between the View and Model and it handles the input from the user then converts it to a command for the Model and View `Figure 46`.

![Figure 45](https://user-images.githubusercontent.com/56771415/188751454-a77e3004-f5b8-4ff4-882b-d64e59b486ae.png)

![Figure 46](https://user-images.githubusercontent.com/56771415/188751624-d765d18b-193a-4e41-8d49-dc4799fd7b87.png)

### 4.7.4 Exports Modules
Modules in **Node.js* are something like libraries in JavaScript which are a set of functions we want to use in our application. **Node.js** comes with built-in modules such as http, OS ,or events. However, in this project we want to create our own modules and use it, to achieve that we used **module.exports** and require. There are many methods to exports module in node.js but we will use the basic and very simple method which is just exports the functions or the schema that we want then require it. For example, we exports these three methods in otherFunction.js file as we can see in `Code 21` and we want to use it in **webController.js** file so, we required **otherFunction.js** file as we can see in `Code 22` and require basically means load the module, then we stored it in the variable called **otherFunction**. By using the variable **otherFunction** we can access to the three functions we exports as we can see in `Code 23`.

```C#
/**
 * export the function
 */
module.exports = {
  randomString,
  sendEmailLogIn,
  sendEmailSignUps,
  sendEmailRegister,
};
```

```C#
const otherFunction = require("../../public/js/otherFunction"); // <------- In "webController.js" File
```

```C#
try {
    const user = await User.login(email, password);
    // so every time he logging in he will have different code
    await VerifyCode.deleteMany({ id: user.id });

    const code = otherFunction.randomString(5); // <-------
    console.log(code);
    otherFunction.sendEmailLogIn(email, code); // <-------

    if (user.id) {
      await verifyUser.findOneAndUpdate(
        { id: user.id },
        { code },
        { upsert: true, new: true }
      );
    }
```

### 4.7.5 Routing
### Routing in simple application
Routing the process of how the application response to a client request to a specific endpoint (URL) and a specific HTTP method (GET, POST,PUT). Express framework provide many method to define routes but before we explain how we used the routes in our project we need to understand the basic method of defining a route which can be seen in `Code 24`. The first line is to load express module and, the second line it to call the express function `express()` and puts new express application inside the app variable, then using app variable we created the route. As we can in `Code 24` the route consist of four part, the first part is app which is an instance of express, then get method which is an HTTP request method and it should be in lowercase. Number three is where we declare the path, finally the last part which is where the function is executed when the route is matched and in this example in will render **index.js** file.

```C#
const express = require("express");
const app = express();

//1 //2 //3
app.get("/", (req, res) => {
  res.render("index"); //4
});
```

### Routing in MVC application
Because we are using MVC model design pattern we separated the code into three different files and they are **app.js**, **webRoutes.js**, and **webController.js**.

- webController.js

Is where the functions is executed when the route is matched for example, we created a function called homePageGet and the purpose of this function is to render **index.ejs** and sends a JSON object if the response succussed or send an error message if the response filed as we can see in `Code 25` however we exports the function to use it in **webRoutes.js**.

```C#
/**
 * GET /
 * Homepage
 */
exports.homePageGet = async (req, res) => {
  try {
    res.render("index", { title: "HOME" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};
```

- webRoutes.js

Is where we define the **HTTP** method and the path for example, we used the path "/" to execute function **homePageGet**. To achieve `Code 26` that, first we create variable called express and load express module. second, we create variable called router and assign it to a function called `Router()` this function provided by express and it is used to create a new router object and stored it in array therefore, we can use router variable to store many routes as we want. Third we load **webController.js** using require and stored it in variable called **webController**. The fourth step using router variable we define the HTTP method which is get then we assign the path ("/") and last thing we put is **homePageGet** function. However the variables with the yellow line are middleware’s which will be explained in other section. Finally because we created all this by using router variable, we just need to exports the variable not the hole file as we can see in `Code 26`

```C#
const express = require("express"); //1
const router = express.Router(); //2
const webController = require("../controllers/webController"); //3
const {
  requireAuth,
  requireAuthAdmin,
  requireAuthAdvisor,
  requireAuthAdmin_post,
  requireAuthStudent,
  requireAuthLogIn,
  requireAuthVerify,
} = require("../../middleware/authMiddleware");

/**
 * HOME
 */
router.get("/", requireAuth, requireAuthVerify, webController.homePageGet); //4
```

```C#
module.exports = router;
```

- app.js

In **app.js** we just need to load webRoutes.js then using `use()` function we need to assign a root path for the hole application and we need to put the router we just load as we can see in `Code 27`. We used **app.js** to run the router instead of webRoutes.js because the server only see **app.js** file similar to **index.html**.

```C#
const routes = require("./server/routes/webRoutes.js");
app.use("/", routes);
```

### 4.7.6 Functions
In this part we will explain all the function we have in **otherFunction.js** file.

- randomString()

The purpose of this function is to generate random characters and return it as string as we can see in `Code 28`, then we use these characters as verification code to verify the user when he login. We need only one parameter which is the length of the code or string.

```C#
/**
 * Generate random characters | we used in in login_post
 */
function randomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
```

### Nodemailer

**Nodemailer** is a **Node.js** module that’s make sending emails easier and faster also it has many features such as sending email attached with images and plain text. However, we used this module in **sendEmailLogIn** and **sendEmailSignUps** functions.

- sendEmailLogIn()

This function is responsible for sending an email with the verification code when the user login. The two parameters are, the email we want to send the verification code to and, the verification code itself. As we can see in `Code 29` the function contains two variables and one function which is `sendMail()`. The first variable is transporter and in it we need to specify the service and the email we want to use as host email. The second variable is mailOptions we need to specify the email that we want to send the verification code to and the verification code. The sendMail function is just to handle the errors. However, we need to require nodemailer module first before we can use it as shown in `Code 30`.

```C#
/**
 * SendEmail for login auth | we used in in login_post
 */
const sendEmailLogIn = (email, code) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "registersystemhct@gmail.com",
      pass: "CAPPROJECTEMAIL",
    },
  });

  var mailOptions = {
    from: "registersystemhct@gmail.com",
    to: email,
    subject: "Verify code",
    text: code,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
```

```C#
const nodemailer = require("nodemailer");
```

- sendEmailSignUps()

As we can see in `Code 31` this function is similar to the function `sendEmailLogIn()` but the difference is it has only one parameter, because the purpose of this function is to send an email to the user to inform him that he is registered now in the system.

```C#
/**
 * SendEmail for signup | we used in in signup_post
 */
const sendEmailSignUps = (email) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "registersystemhct@gmail.com",
      pass: "CAPPROJECTEMAIL",
    },
  });

  var mailOptions = {
    from: "registersystemhct@gmail.com",
    to: email,
    subject: "Register HCT",
    text:
      `You are now registered in the system. Now you can lgoin using this email: ` +
      email,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
```

### 4.7.7 Validation
Validation is the process of ensuring that a web application operates on clean, correct and useful data. In this project we have three types of validation and they are validation on interface level, validation on database level and validation on server level. Therefore in this section we will explain each one of them also we put all validation function in one file called **validation.js**.

#### Interface level
Interface level validation is process that happen in the client side before it send any request to the server and we used this type of validation in login page and register page.

- validateEmail()

This function is used to validate user email whenever he login and because of that it only take one parameter which is email. We used regular expressions to check if the email is valid or not therefore if the email is valid it will return true and return false if it’s not valid as we can see in `Code 32`.

```C#
/** Email Validation */
const validateEmail = (email) => {
  /**
   * re stand for  (regular expression:)
   */
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
```

- validatePassword()

This function is used to validate user password. The only two condition we need for password is it should be more than 5 and not empty and at the end it will return true or false as we can see in `Code 33`.

```C#
/** Password Validation*/
function validatePassword(password) {
  if (password && password.length > 5 && password.indexOf(" ") < 0) {
    return "true";
  } else {
    return false;
  }
}
```

- validateLogin()

This purpose of this function is to reuse both of the previous function (**validateEmail** and **validatePassword**) without make the code look messy in the **login.ejs** file therefore we create this function as shown in `Code 34`.

```C#
/** Login Page Validation */
function validateLogin(email, password) {
  if (validateEmail(email) == false) {
    return false;
  } else if (validatePassword(password) == false) {
    return false;
  } else {
    return true;
  }
}
```

#### Usage

We used these function in **login.ejs** file so first we load **validation.js** file as we can see in `Code 35` then we get the values of both email and password `Code 36` and used them `validateLogin()` function as parameters `input()`.

```C#
//get the values
    const email = form.email.value;
    const password = form.password.value;
```

```C#
<link rel="stylesheet" href="/css/login.css" />
<script src="/js/validation.js"></script> // <------- Load validation.js file
```

```C#
//Interface validation
if (validateLogin(email, password)) {
      try {
        //to send post request and save it in result
        const result = await fetch("/login", {
          method: "POST", //we tell the server we will use  post
          body: JSON.stringify({ email, password }), //what the body will contain
          headers: { "Content-Type": "application/json" }, // we tell the server what content type will be
        });
        //take the result from the response and save it in data variable
        const data = await result.json();
        if (data.errors) {
          loginError.textContent = data.errors.email;
          loginError.textContent = data.errors.password;
        }
        if (data.user) {
          console.log(data.user);
          location.assign("/authentication");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      loginError.textContent = "Email or Password not valid ";
    }
```

#### Server level

We create a `handleErrorsLogin()` function to handle errors from server. As we can see in 
`Code 37` the function handle three errors which is email, password and duplicated data (key).

```C#
/**
 * handle error |  login_post
 */

const handleErrorsLogin = (err) => {
  let errors = { email: "", password: "" };

  //incorrect email (for login)
  if (err.message === "incorrect email") {
    errors.email = "Email or Password not valid ";
  }
  //incorrect password (for login)
  if (err.message === "incorrect password") {
    errors.password = "Email or Password not valid ";
  }

  if (err.message.includes("user validation failed")) {
    //validation errors
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  console.log(errors);
    //duplicate error code
    if (err.code === 11000) {
      errors.email = "that email is already registered ";
      return errors;
    }
  return errors;
};
```
#### Usage
We used this function in two function in **webController.js** file which are **login_post** and **signup_post** and validation work in both in the same way. For example, if we take a look at `Code 38` which is **login_post** function we can see many codes but for validation we only need the codes with the red line. try/catch are needed to catch any error inside try/catch then pass the error to `handleErrorsLogin()` and the function will read the error and decide what is the error type then send the error that decided through `handleErrorsLogin()` function to the client.

```C#
/**
 * login post
 */
module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try { // <-------
    const user = await User.login(email, password);
    // so every time he logging in he will have different code
    await VerifyCode.deleteMany({ id: user.id });

    const code = otherFunction.randomString(5);
    console.log(code);
    otherFunction.sendEmailLogIn(email, code);

    if (user.id) {
      await verifyUser.findOneAndUpdate(
        { id: user.id },
        { code },
        { upsert: true, new: true }
      );
    }""

    //jwt: we assign token to user
    const token = createToken(user.id, user.role, "Not Verified");

    //jwt with cookie
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    //Response
    res.status(200).json({ user: user.email });
  } catch (error) { // <-------
    const errors = validation.handleErrorsLogin(error); // <-------
    res.status(400).json({ errors }); // <-------
  }
};
```

#### Database level
To handle errors in database we used mongoose framework and validator which is a module in **Node.js**. We will see later in `Code 41` mongoose provide validation within the schema creation which save us a lot of time and for we used validator to validate the email and whenever mongoose or validator any error it will end it to the client.

- Client side

After the error sent to the client side we store the error in a variable called data. Then we display the error with DOM. We are using if statement because if there are no error then the DOM code will not work `Code 39`.

```C#
const data = await result.json();
        if (data.errors) {
          loginError.textContent = data.errors.email;
          loginError.textContent = data.errors.password;
        }
```

### 4.7.8 Models
Model folder is where we stored our schemas and database related functions. Schema is a JSON object that define the structure of your data, basically schema is a map to MongoDB collection (table) that define the shape of the document (row) inside the collection. 

#### User.js

The main purpose of this file is to check if the user is registered or no  in the system. First, we required all the dependencies we need as we can see in `Code 40` and they are mongoose framework, validator library which is a library of string validators, bcrypt to hash the password, and finally autoincrement which is mongoose plugin auto-increments any ID field we have.

```C#
const mongoose = require("mongoose");
const { isEmail } = require("validator"); //98.1K (gzipped: 29.2K)
const bcrypt = require("bcrypt");
autoIncrement = require("mongoose-auto-increment"); //3K (gzipped: 1.3K)
```

Then using **Mongoose** framework we have created the schema `Code 41` with four property **id**, **email**, **password** ,and **role**. Also in schema we can do some validation for example email property has validate keyword which we used combined with validator library to validate if the email is valid or no. We can also specify what value the property contain using *enum* keyword which we used for role.

```C#
const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"], //Databse level 1
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"], //Databse level 1
    description: "must be a valid email",
  },
  password: {
    type: String,
    required: [true, "Please enter an password "], //Databse level 1
    minlength: [6, "Minimum password length is 6 character"], //Databse level 1
    description: "must be at least 6",
  },
  role: {
    type: String,
    required: true,
    enum: ["AD", "AV", "ST"],
    description: "can only be one of the enum values",
  },
});
```

After creating the schema we need to make the id generated automatically whenever we create a new document and every id should be unique that’s why we used **autoincrement** plugin. As we can see in `Code 42` we only need to specify the collection name, the field that we need to increase and the starting number, after that whenever we create a new document in will automatically generate and assign the value to id.

```C#
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, {
  model: "user",
  field: "id",
  startAt: 1,
});
```

Then we have **Hooks** and they are middleware in **Mongoose** and there are many hooks and each one of them has a specific task to do but, in this project we will use two of them which are **Pre** and **Post**. Pre and Post are functions that will be executed before and after a certain action, to simplify it they are like a trigger in SQL. Pre will be executed before the document is saved in the database and Post will be executed after the document is saved in the database.   

#### Post

We used Post middleware combined with **Alert** library `Code 43` to alert the admin when he successfully register any user as showin in `Figure 47`.

```C#
//fire a function after doc saved to db
userSchema.post("save", (doc, next) => {
  let alert = require("alert");
  alert("Saved in database");
  next();
});
```

![Figure 47](https://user-images.githubusercontent.com/56771415/188979168-21fc2556-80c0-419a-9969-89af4f990106.png)

#### Pre

We used Pre middleware combined with some functions provided by **Bcrypt** library `Code 44` to hash the password before we stored it in the database.

```C#
//fire a function before doc saved to db / we used it for hash the password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(); // <-------
  this.password = await bcrypt.hash(this.password, salt); // <-------
  next();
});
```

#### Hashing and Salt

Hashing is the process of converting a given value into another value `Figure 48`. However, hackers can reverse hashing and get the original value, that’s why to solve this problem we used something called salt. **Salt** basically is a string of characters so, we attached salt with the password then we hashed both of them as we can see in `Figure 49` and because of that hackers needs to know the salt value if they want to reverse hashing.

![Figure 48](https://user-images.githubusercontent.com/56771415/188979754-ece6037b-0457-4ea8-adb4-db2845ba1744.png)

![Figure 49](https://user-images.githubusercontent.com/56771415/188979764-02179a43-3010-49ff-b480-cfb21944785f.png)


- Login()

The final function we have in **User.js** is `login()` with two parameters **email** and **password**. 
The purpose of this function is to check if the user is registered in the database or no. To search in the database we used **email** parameter as a condition in `findOne()` query, which is a query provided by **Mongoose** framework. This query will return **null** if the email doesn’t match any email in the database or return the document as **JSON** object, as we can see in `Code 45` then we store the result in a variable called **user**. Because the password is hashed, we need to use a function provided by **Bcrypt** library called compare() this function will compare the password we provided in parameter with the password that stored in **user** variable as we can see in `Code 46`.

**Note**: The logic is explained in algorithm section for this function.

```bat
{ 
_id: new ObjectId("61d46f9cca574b3aac8Odf41"),
email: 'admin@hct.ac.ae',
password: $2b$10$SZnKnalqj7amcmBkk6wrw0K41YhXuhdO.hGXuLpORxWE2BnQkPzdk,
role: 'AD',
__v: 0,
id: 1
} 
```

```C#
//static method to login use
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const passCompare = await bcrypt.compare(password, user.password);
    if (passCompare) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};
```

Finally before we can use it, we need to give the collection a name and exports it as we can see in `Code 47`. Now we can see in `Figure 50` the data are structure as we want, the password is hashed and id is generated automatically.

```C#
// The name of the collection
const User = mongoose.model("user", userSchema);

/**
 * Export User schema
 */
module.exports = User;
```

![Figure 50](https://user-images.githubusercontent.com/56771415/188981197-b3dd8b38-45f2-4339-beda-a63e82a66493.png)

#### VerifyUser.js
The purpose of this file is to store the verifying code and the user id attached to the verifying code. The `Code 48` shows the entire file which just 4 block of code. The first line is to require **Mongoose** then creating a schema it consist of three attributes which are **id**, **code**, and **expireAt**. 
The first two attribute are user id and the verification code but the last attribute is used to delete the document (row) after specific time which five minutes. after that we give the collection a name and exports the module. The `Figure 51` shows the id of the user with verification code attached to it and when the document will be expired (deleted).

```C#
const mongoose = require("mongoose");

const verifyCodeSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  code: {
    type: String,
    require: true,
  },
  createdAt: { type: Date, expires: "5m", default: Date.now },
});

// The name of the collection
const VerifyCode = mongoose.model("VerifyCode", verifyCodeSchema);

module.exports = VerifyCode;
```

![Figure 51](https://user-images.githubusercontent.com/56771415/188984934-6d5ae30a-9b64-42c4-8419-5ffdec5e7cab.png)

#### Student.js
The purpose of this file is to store student data as we can see in `Code 49` it consist of five attributes which are **id**, **firstName**, **lastName**, **semester** and **advisorId**. We need to semester attrubte to decide what course he should take and advisorId to know what advisor he belong to.

```C#
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    require: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    require: true,
    lowercase: true,
  },
  semester: {
    type: Number,
    require: false,
  },
  advisorId: {
    type: Number,
    require: false,
  },
});

// The name of the collection
const Student = mongoose.model("student", studentSchema);

module.exports = Student;
```
Picture of students page in atlas `Figure 51`

![Figure 51](https://user-images.githubusercontent.com/56771415/188985653-abda44cd-fbf0-4479-9f73-eb9224355c7e.png)

#### Advisor.js
The purpose of this file is to store advisor data as we can see in `Code 50` it consist of three attributes which are **id**, **firstName**, **lastName**.

```C#
const mongoose = require("mongoose");

const advisorSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    require: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    require: true,
  },
});



// The name of the collection
const Advisor = mongoose.model("advisor", advisorSchema);

module.exports = Advisor;
```

Picture of advisors page in atlas `Figure 52`

![Figure 52](https://user-images.githubusercontent.com/56771415/188986254-01a7279e-9def-47ad-8f3f-3118dda37be9.png)

#### Course.js
The purpose of this file is to store courses data as we can see in `Code 51` it consist of four attributes which are **courseName**, **code**, **semester** and **id** which is student id.

```C#
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    require: true,
    lowercase: true,
  },
  code: {
    type: String,
    require: true,
    uppercase: true,
    unique: true,
  },
  semester: {
    type: Number,
    required: false,
  },
  id: [Number],
  require: false,
});

// The name of the collection
const Course = mongoose.model("course", courseSchema);

module.exports = Course;
```

Picture of courses page in atlas `Figure 53`

![Figure 53](https://user-images.githubusercontent.com/56771415/188986654-1c9a0b95-0ffb-49eb-a9b9-48e85d8a4395.png)

#### Student_Course.js
Because of some bugs in course collection we are forced to create another collection just to show it in page **showCourse** page. The bugs was that the data was keep changing if we used it in **showCourse** page therefore we create this collection.

```C#
const mongoose = require("mongoose");

const student_courseSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  code: [String],
});

// The name of the collection
const StudentCourse = mongoose.model("student_course", student_courseSchema);

module.exports = StudentCourse;
```

Picture of student_courses page in atlas `Figure 54`

![Figure 54](https://user-images.githubusercontent.com/56771415/188986892-70d5ae29-0bbc-4d9b-866d-09e890b626ef.png)

### 4.7.9 Algorithm
#### Login
We used this algorithm in `Code 46` and the purpose and technical details in the same section however the steps are:
```
1- Get email and password.

2- Search in the database using the provided email.

3- Store the result in variable we called it user.

4- If statement.

  if user exist:
  
     compare the password with the hashed password in the database
     
        if both password matched
	
                  return user
		  
      else
      
             throw an error
	     
  else
  
       throw and error
```

#### Calculate the recommended class for each course
```
1- Get the number of student in each course from the database.
2- Divide the number of student in each course with 25 (the number of student in each class).
3- Use the result in Math.ceil() function.
4- Show the result in report page.
```

**Note**: `Math.ceil()` is a function that always rounds a number up to the next largest integer we used it because the result of dividing the number of students in each course with 25 will always be less than 1 unless it is 25 which will be 1.

### 4.7.10 webController.js
This file contains all the logic and it act like a brain most of the data are controlled by this file.

#### Dependencies
As we can see in `Code 52` we can see all the Dependencies we need in this file.

```C#
const jwt = require("jsonwebtoken"); //68.5K (gzipped: 20.4K)
const User = require("../models/User");
const Advisor = require("../models/Advisor");
const Student = require("../models/Student");
const verifyUser = require("../models/verifyUser");
const { json } = require("express");
const jwt_decode = require("jwt-decode"); //1.7K (gzipped: 951)
const otherFunction = require("../../public/js/otherFunction");
const validation = require("../../public/js/validation");
const VerifyCode = require("../models/verifyUser");
const Course = require("../models/Course");
const Student_Course = require("../models/Student_Course");
const CourseStudent = require("../models/course_student");
const mongoose = require("mongoose");
```

#### Jwt & jwt_decode
Both of them modules related to cookies which we will explain it in another section but basically, they are modules to **encrypt** and **decrypt** cookies.

#### Schemas
User, Advisor, Student, verifyUser, Course and Student_Course all of them are schemas we exports before so we now we just use them.

#### Functions
Validation and otherFunction are just  modules with functions that we exports from before which is explained in other section.

#### Main functions
Here we will talk about the main functions in this file.

- homePageGet()

This function is responsible for rendering **index.ejs** (Home page) and send **JSON** object contain the webpage title as shown in `Code 53`.

```C#
/**
 * GET /
 * Homepage
 */
exports.homePageGet = async (req, res) => {
  try {
    res.render("index", { title: "HOME" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};
```

- login_get()

This function is responsible for rendering **login.ejs** (login page) and send **JSON** object contain the webpage title.

```C#
/**
 * Login Get
 */

exports.login_get = async (req, res) => {
  try {
    res.render("authentication_layout/login", { title: "Login" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};
```

- login_post()

This function will be triggered whenever a user try to login. It contain code related to login process such as check if email and password match or generate authentication code and save it in the database.

```C#
/**
 * Login Post
 */
module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // so every time he logging in he will have different code
    await VerifyCode.deleteMany({ id: user.id });

    const code = otherFunction.randomString(5);
    console.log(code);
    otherFunction.sendEmailLogIn(email, code);

    if (user.id) {
      await verifyUser.findOneAndUpdate(
        { id: user.id },
        { code },
        { upsert: true, new: true }
      );
    }

    //jwt: we assign token to user
    const token = createToken(user.id, user.role, "Not Verified");

    //jwt with cookie
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    //Response
    res.status(200).json({ user: user.email });
  } catch (error) {
    const errors = validation.handleErrorsLogin(error);
    res.status(400).json({ errors });
  }
};
```

- authenticationPage_get()

This function is responsible for rendering **authentication.ejs** (authentication page) and send **JSON** object contain the webpage title.

```C#
/**
 * Auth Get
 */
exports.authenticationPage_get = async (req, res) => {
  try {
    res.render("authentication_layout/authentication", {
      title: "Authentication",
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};
```

- authenticationPage_post()

This function will be triggered whenever a user enter authentication code and submit. It contain code related to authentication process like checking if the user entered the right code or no create cookie for the user.

```C#
module.exports.authenticationPage_post = async (req, res) => {
  try {
    //take jwt from cookie
    const a = req.cookies.jwt;
    //decode jwt
    const decode = jwt_decode(a);
    // search on database for the user we want
    const userCode = await VerifyCode.findOne({ id: decode.id });

    if (req.body.authCode == userCode.code) {
      await VerifyCode.deleteMany({ code: req.body.authCode });

      //jwt: we assign token to user
      const token = createToken(decode.id, decode.role, "Verified");

      //jwt with cookie
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

      res.status(200).json({ userCode });
    } else {
      res.status(400).json({ error: "error" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};
```

- signup_get()

This function is responsible for rendering **signup.ejs** (signup page) and send **JSON** object contain the webpage title also it will send **advisor list** to the client so we can display all the advisors in the drop box.

```C#
/**
 * Signup Get
 */
module.exports.signup_get = async (req, res) => {
  try {
    //send advisors list to signup page
    const allAdvisor = await Advisor.find({});
    const Advisors = allAdvisor;

    res.render("authentication_layout/signup", {
      title: "RegisterStuff",
      Advisors,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};
```

- signup_post()

This function will be triggered if the user want to add or register a new user. It contain all the code related to adding new a user also it will send email the user.

```C#
/**
 * Signup Post
 */
module.exports.signup_post = async (req, res) => {
  const { email, password, role, firstName, lastName, advisor, semester } =
    req.body;
  try {
    //asynchronous / create user
    const user = await User.create({ email, password, role });
    if (role === "AV") {
      /* await Advisor.create({firstName, lastName }); */

      await Advisor.findOneAndUpdate(
        { id: user.id },
        { firstName, lastName },
        {
          upsert: true,
          new: true,
        }
      );
    }
    if (role === "ST") {
      await Student.findOneAndUpdate(
        { id: user.id },
        { firstName, lastName, semester: semester, advisorId: advisor },
        {
          upsert: true,
          new: true,
        }
      );
    }
    //this function to send email
    otherFunction.sendEmailSignUps(email);
    //201 = successfully created
    res.status(201).json({ user: user._id });
  } catch (error) {
    const errors = validation.handleErrors(error);
    //400 = error
    res.status(400).json({ errors });
  }
};
```

- logout_get()

This function will be triggered if the user click on **logout** it will just delete all the cookies and redirect the user to home page which will redirect him to login page because he doesn’t have any cookies.

```C#
/**
 * Logout Get
 */
module.exports.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });

  res.redirect("/");
};
```

- studentList_get()

This function is responsible for rendering **studentList.ejs** (studentlist page) and send **JSON** object contain the webpage title also it will send **student list** to the client so we can display all the student in the page and it depend on the advisor.

```C#
/**
 * StudentList Get
 */
module.exports.studentList_get = async (req, res) => {
  //take jwt from cookie
  const a = req.cookies.jwt;
  //decode jwt
  const decode = jwt_decode(a);
  // search on database for the user we want
  const user = await User.find({ id: decode.id });
  console.log(user[0].id);

  //console search by advisor id
  const allStudent = await Student.find({ advisorId: user[0].id });

  const Students = allStudent;

  res.render("studentList", { title: "student list", Students });
};
```
- report_get()

This function is responsible for rendering **report.ejs** (report page) and send **JSON** object contain the webpage title also it will send **course list** to the client so which contain information about how many student in each course

```C#
/**
 * report get
 */
module.exports.report_get = async function (req, res) {
  const course = await Course.find({});


  res.render("report", { title: "report", course });
};
```
- register_get()

This function is responsible for rendering **register.ejs** (register page) and send **JSON** object contain the webpage title also it will send **course list** to the client so which contain information about the course so the student can register the course

```C#
/**
 * register get
 */
module.exports.register_get = async (req, res) => {
  //take jwt from cookie
  const a = req.cookies.jwt;
  //decode jwt
  const decode = jwt_decode(a);
  // search on database for the user we want
  const user = await User.findOne({ id: decode.id });

  const student = await Student.findOne({ id: user.id });

  const course = await Course.find({ semester: student.semester });

  res.render("register", { title: "register", course });
};
```
- register_post()

This function will be triggered if the user want to register any course.

```C#
**
 * register get
 */
module.exports.register_post = async (req, res) => {
  const { code } = req.body;
  //take jwt from cookie
  const a = req.cookies.jwt;
  //decode jwt
  const decode = jwt_decode(a);
  // search on database for the user we want
  const user = await User.findOne({ id: decode.id });

  const student = await Student.findOne({ id: user.id });

  await Student_Course.insertMany([
    {
      id: student.id,
      code,
    },
  ])
    .then(function () {
      console.log("Data inserted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });

  await Course.updateMany({ code: code }, { $push: { id: [student.id] } });

  otherFunction.sendEmailRegister(user.email);

  res.send("inserted course");
};
```
- showCourse_Get()

This function is responsible for rendering **showCourse.ejs** (showCourse page) and send **JSON** object contain the webpage title also it will send **course list** so the student can see his courses.

```C#
**
 * showCourse_Get get
 */
module.exports.showCourse_Get = async (req, res) => {
  try {
    const a = req.cookies.jwt;
    const courseArray = [];
    //decode jwt
    const decode = jwt_decode(a);

    // search on database for the user we want
    const user = await User.findOne({ id: decode.id });

    const StudentCourses = await Student_Course.findOne({ id: user.id });

    const course = await Course.find({ code: StudentCourses.code });
    res.render("showCourse", { title: "show Course", course });
  } catch (err) {
    res.status(500).send("You have no courses");
  }
};
```
- delete()

This function is just to help in development stage which will clear all the database.

```C#
/**
 * delete get
 */
module.exports.delete = async (req, res) => {
  await User.deleteMany({ role: "ST" });
  await User.deleteMany({ role: "AV" });
  await Advisor.deleteMany({});
  await Student.deleteMany({});
  await Student_Course.deleteMany({});
  await Course.updateMany(
    { $or: [{ semester: 1 }, { semester: 2 }] },
    { id: [] }
  );
  await VerifyCode.deleteMany({});
  res.send("delete");
};
```
- Cookies

These function are related to cookies.

```C#
/**
 * jwt function
 */
const jwt_secret = "Dfdfdfsdfsdfsdfsdfsdfsdfsdcxcsdfs";

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id, role, verify) => {
  return jwt.sign({ id, role: role, verify }, jwt_secret, {
    expiresIn: maxAge,
  });
};
```

### 4.7.11 authMiddleware.js
These file contain most middleware we created and the purpose of this middleware is to user rules and user status. For example redirect the user to home page if he does not have access to report page.
#### Functions
Middleware are just code or functions therefore in this section we will list all middleware functions.

- requireAuth()

To check if the user is authenticated. If he is not authenticated it will redirect him to login page.

```C#
//check if user is authenticate or no
const requireAuth = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;

  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        res.redirect("/login");
      } else {
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};
```

- requireAuthLogIn() & requireAuthVerify()

Both of them are functions to check if the user verified or no.

```C#
//check cant back to login page
const requireAuthLogIn = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, jwt_secret, async (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/");
      } else {
        if (decodedToken.verify === "Not Verified") {
          next();
        } else {
          res.redirect("/");
        }
      }
    });
  } else {
    next();
  }
};
```

```C#
//check if user is verified or not
const requireAuthVerify = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;

  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/");
      } else {
        if (decodedToken.verify === "Verified") {
          next();
        } else {
          res.redirect("/authentication");
        }
      }
    });
  } else {
    res.redirect("/authentication");
  }
};
```

- requireAuthAdmin()

To check if the user role is admin or no. If not he will be redirected to homepage.

```C#
//check if user is authenticate or no for signup page (admin)
const requireAuthAdmin = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;

  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/");
      } else {
        if (decodedToken.role === "AD") {
          next();
        } else {
          res.redirect("/");
        }
      }
    });
  } else {
    res.redirect("/");
  }
};
```

- requireAuthAdmin_post()

It will check if you are using browser.

```C#
/check if user is authenticate or no for signup page (admin) but this is for third pary program such as postman
const requireAuthAdmin_post = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;

  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.send("You are not  authorized to this page");
      } else {
        if (decodedToken.role === "AD") {
          next();
        } else {
          res.send("You are not authorized to this page");
        }
      }
    });
  } else {
    res.send("You are not authorized to this page");
  }
};
```

- requireAuthAdvisor()

To check if the user role is advisor or no. If not he will be redirected to homepage.

```C#
//check if user is authenticate or no for studentlist page (advisor)
const requireAuthAdvisor = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;
  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/");
      } else {
        if (decodedToken.role === "AV") {
          next();
        } else {
          res.redirect("/");
        }
      }
    });
  } else {
    res.redirect("/");
  }
};
```

- requireAuthStudent()

To check if the user role is student or no. If not he will be redirected to homepage.

```C#
//check if user is authenticate or no for register page (student)
const requireAuthStudent = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;

  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/");
      } else {
        if (decodedToken.role === "ST") {
          next();
        } else {
          res.redirect("/");
        }
      }
    });
  } else {
    res.redirect("/");
  }
};
```

#### Finally we export all the function so we can use it.

```C#
module.exports = {
  requireAuth,
  checkUser,
  requireAuthAdmin,
  requireAuthAdvisor,
  requireAuthAdmin_post,
  requireAuthStudent,
  requireAuthLogIn,
  requireAuthVerify,
};
```

## Chapter 5: Conclusion
### 5.1	Summarize
Our project is Auto-Registration system which allow student to register with much greater ease compared to current system also, it will remove or reduce the needs of the advisor since courses is offered by the system and all the analysis which involves checking **GPA**, **repeated courses** and, **student semester** is done by the system which means it will reduce time and  human error for both advisor and student. At end the system will calculate the number of students in every course and suggest how many classes we need for each course and that will help the collage to decide how many classes they need to open for the next semester.

### 5.2	Reflection


### 5.3	Future development
For future plan we don’t think we will continue this project anymore for several reasons but most important reason is registration system is a big project involves many rules and regulations which take huge amount time to make sure that the system is working without any problem. Also I think the technologies we used is unsuitable for this type of project especially our database technology which **NoSQL** because there is no consistency or much harder to make the data consistent compared to **SQL**. However, I think now we can decide what technology is better for us in our future projects.

## References
- [1] 	“Usability testing on website wadaya,” [Online]. Available: https://iopscience.iop.org/article/10.1088/1742-6596/1165/1/012012/pdf#page=1. [Accessed 13 4 2022].
- [2] 	“Using the Advantages of NOSQL: A Case,” [Online]. Available: https://www.researchgate.net/profile/Divya-Chauhan-4/publication/349110376_Using_the_Advantages_of_NOSQL_A_Case_Study_on_MongoDB/links/6021154d92851c4ed5580298/Using-the-Advantages-of-NOSQL-A-Case-Study-on-MongoDB.pdf#page=1. [Accessed 18 3 2022].
- [3] 	“A Place for Node.Js in the Computer Science Curricu,” [Online]. Available: https://www.researchgate.net/profile/Scott-Frees/publication/271849731_A_Place_for_NodeJs_in_the_Computer_Science_Curriculum/links/54d4db340cf2970e4e63c479/A-Place-for-NodeJs-in-the-Computer-Science-Curriculum.pdf#page=1. [Accessed 13 4 2022].
- [4] 	“Testing a Website: Best Practices” [Online]. Available: https://www.heromotocorp.com/en-in/uploads/Annual_Reports/pdf/20130315113443-pdf-68.pdf#page=1. [Accessed 21 3 2022].
- [5] 	“WebSite Testing. Software Research, Inc.” [Online]. Available: http://www.lieb.com/Readings/evalid%20site%20testing.pdf#page=1. [Accessed 12 2 2022].
- [6] 	ZER-0-NE, “Comparison of JWT and OAuth 2.0 authorisation,” [Online]. Available: https://core.ac.uk/download/pdf/159753962.pdf#page=1. [Accessed 24 9 2021].
- 
 -->
