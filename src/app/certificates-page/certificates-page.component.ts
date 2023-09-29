import { Component } from '@angular/core';

interface Certificate {
  date: string;
  heading: string;
  logo: string;
  uni: string;
  cert: string;
}

@Component({
  selector: 'app-certificates-page',
  templateUrl: './certificates-page.component.html',
  styleUrls: ['./certificates-page.component.scss']
})
export class CertificatesPageComponent {
  certs:any[] = [
    {
      date: 'Jan 9, 2022',
      heading: 'Interface Design Specialization',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'spec.png'
    },
    {
      date: 'June 26, 2017',
      heading: 'Frontend Nanodegree',
      logo: 'udacity-logo.png',
      uni: 'Udacity',
      cert: 'fe.png'
    },
    {
      date: 'Mar 20, 2018',
      heading: 'Javascript',
      logo: 'udemy-logo.png',
      uni: 'Udemy',
      cert: 'js.png'
    },
    {
      date: 'Jan 19, 2019',
      heading: 'Python Data Structures',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'pds.png'
    },
    {
      date: 'June 16, 2018',
      heading: 'Learn & Understand Angular JS',
      logo: 'udemy-logo.png',
      uni: 'Udemy',
      cert: 'angularjs.png'
    },
    {
      date: 'June 12, 2018',
      heading: 'Responsive Web Design',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'rwd.png'
    },
    {
      date: 'Oct 2, 2018',
      heading: 'Building Web Apps in PHP',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'php.png'
    },
    {
      date: 'Feb 18, 2019',
      heading: 'Using Python to Access Web Data',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'python.png'
    },
    {
      date: 'Oct 8, 2018',
      heading: 'Intro to SQL',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'sql.png'
    },
    {
      date: 'Jan 5, 2019',
      heading: 'Intro to Python',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'pfe.png'
    },
    {
      date: 'Jan 9, 2022',
      heading: 'Project Management Fundamentals',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'pm.png'
    },
    {
      date: 'Aug 18, 2018',
      heading: 'Prototyping & Design',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'proto.png'
    },
  ]
}
