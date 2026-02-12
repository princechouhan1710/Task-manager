import React from "react";

function About() {
  return (
    <div className="bg-dark text-light py-5">
      <div className="container">

        <h1 className="text-center cblue mb-4" style={{ fontFamily: "Pacifico" }}>
          About Us
        </h1>

        <div
          className="bg-secondary p-4 rounded shadow"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="fs-5">
            Welcome to <span className="fw-bold">TaskWhiz</span> — your partner in
            mastering productivity and achieving your goals. In today’s fast-paced world,
            staying organized shouldn’t be hard. That’s why we built TaskWhiz: a task
            management tool designed to help you plan, prioritize, and complete your work
            with clarity and confidence.
          </p>

          <h3 className="mt-4 cblue">Our Mission</h3>
          <p className="fs-5">
            Our mission is simple: to empower individuals and teams to do more with
            less stress. We believe productivity should be intuitive, flexible, and
            empowering — whether you’re managing daily tasks, long-term goals, or
            collaborative projects. A clear mission statement is a key part of an
            effective “About Us” page because it tells visitors what your brand
            stands for and how it aligns with their needs. :contentReference
          </p>

          <h3 className="mt-4 cblue">What We Offer</h3>
          <ul className="fs-5">
            <li>
              <strong>Organize with Ease:</strong> Create, edit, and categorize
              tasks with intuitive tools and deadline reminders.
            </li>
            <li>
              <strong>Track Progress:</strong> Get clear visual indicators of your
              progress so you always know what’s done and what’s next.
            </li>
            <li>
              <strong>Stay Focused:</strong> Prioritize what matters most and
              minimize clutter in your workflow.
            </li>
            <li>
              <strong>Collaborate Effortlessly:</strong> Assign tasks, share
              updates, and keep your team in sync.
            </li>
            <li>
              <strong>Flexible & Powerful:</strong> Fits your personal or team
              workflow with customizable settings and smart task features.
            </li>
          </ul>

          <p className="fs-5 mt-4">
            We are committed to creating a productivity experience that helps you
            work smarter — not harder. Whether you’re an individual user striving
            for personal goals or a team member managing shared projects, TaskWhiz
            supports your journey every step of the way.
          </p>

          <p className="fs-5">
            Join our community of users who trust TaskWhiz to stay organized,
            meet deadlines, and achieve meaningful progress — one task at a time.
          </p>

        </div>

      </div>
    </div>
  );
}

export default About;
