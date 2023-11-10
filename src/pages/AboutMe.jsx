import profileImg from "../assets/Profile-image.jpeg";

export default function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={profileImg}></img>
      <p>
        My name is Isabella Kingson. I am a homegrown Minnesotan orginating from
        Minneapolis, but I currently reside in Saint Paul. I live with my
        husband, Nick, and our two cats, Ruby and Stanley. I am a current
        student enrolled in the Coding Boot Camp through the University of
        Minnesota. For the last 6 years, I have been an employee at Punch
        Neapolitan Pizza. I have served there in many ccapacities, from cashier,
        to pizzaiolo, to management. During the pandemic, our company created an
        online ordering system. There were a lot of hiccups at first, but
        eventually it became a common way to make our product more easily
        accessible to the public. I had been curious about coding for same time,
        but I wanted to know how it all worked. I began to wonder what had gone
        wrong initially, and how had they fixed it? As I began learning on my
        own, I stumbled across the U of M bootcamp and thought it was an
        opportunity I couldn't pass up. I hope that this experience will lead to
        a new career in software development.
      </p>
    </div>
  );
}
