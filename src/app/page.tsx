import { cn } from "@/lib/utils";
import Testimonial from "./testimonial";

export default function Home() {
  const testimonials = [
    {
      student: { 
        name: 'Daniel Clifford', 
        image: { src: '/daniel.jpg', className: 'border-Purple-300/50' }, 
      },
      text: 'I received a job offer mid-course, and the subjects I learned were current, if not more so,  in the company I joined. I honestly feel I got every penny\’s worth.',
      quote: "“ I was an EMT for many years before I joined the bootcamp. I\’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
      className: 'text-white bg-Purple-500'
    },
    {
      student: { 
        name: 'Jonathan Walters', 
        image: { src: '/jonathan.jpg', className: '' }
      },
      text: 'The team was very supportive and kept me motivated',
      quote: "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
      className: 'text-white bg-Gray-500'
    },
    {
      student: { 
        name: 'Jeanette Harmon', 
        image: { src: '/jeanette.jpg', className: '' }
      },
      text: 'An overall wonderful and rewarding experience',
      quote: "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.  ”"
    },
    {
      student: { 
        name: 'Patrick Abrams', 
        image: { src: '/patrick.jpg', className: '' }
      },
      text: 'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
      quote: "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
      className: 'text-Gray-200 bg-Blue-dark'
    },
    {
      student: { 
        name: 'Kira Whittle', 
        image: { src: '/kira.jpg', className: '' }
      },
      text: 'Such a life-changing experience. Highly recommended!',
      quote: "“ Before joining the bootcamp, I\’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I\’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”"
    }
  ]
  return (
    <div className={cn(
      'grid grid-cols-1 gap-7 my-7',
      'p-9'
    )}>
      { testimonials.map(data => <Testimonial key={data.student.name} {...data} />) }
    </div>
  );
}
