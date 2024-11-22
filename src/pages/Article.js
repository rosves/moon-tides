import React from "react";
import "./Article.scss";
import img from "../assets/images/article_img.png";

function Article() {
  return (
    <div>
      <h1>
        <span>E</span>mbracing the Art of Slow Living: Finding Peace in a
        Fast-Paced World
      </h1>
      <div>
        <p>by xxx</p>
        <p>date</p>
        <p></p>

        <span>
          In today’s fast-paced society, we’re often encouraged to keep moving,
          stay productive, and always be “on.” However, many people are
          beginning to see the value in slowing down, embracing a way of life
          called “slow living.” This approach isn’t just about doing things at a
          leisurely pace; it’s a mindful, intentional way of experiencing life
          that prioritizes quality over quantity, connection over busyness, and
          presence over productivity. Communities like Hitomi Mochizuki’s, which
          emphasize spiritual growth, self-care, and a connection to nature, are
          especially drawn to slow living as a path to a more meaningful,
          balanced life.
        </span>

        <h2>What is Slow Living?</h2>

        <p>
          At its core, slow living encourages us to step back from the rush and
          cultivate an awareness of each moment. It’s about savoring
          experiences, whether it’s a quiet morning with a cup of tea, a walk in
          the park, or time spent with loved ones. Slow living promotes a shift
          from the “do more” mentality to a mindset of “be more”—more present,
          more grounded, and more at ease with ourselves. <br />
          <br />
          By prioritizing mindfulness and connection, slow living gives us space
          to reconnect with our true selves and the natural world. It encourages
          us to make choices that nourish our well-being, whether it’s
          practicing meditation, simplifying our schedules, or opting for
          eco-friendly, sustainable habits that protect our planet.
        </p>
        <img src={img} width="1257" height="305" />
      <p>How to Begin Embracing Slow Living</p>
      <span>Slow living doesn’t require drastic changes; it’s about making small, meaningful adjustments to daily life. Here are a few steps to help you start:
      </span>
      <ol>
        <li>
        Create Daily Rituals: Simple rituals, like lighting a candle at sunrise or setting intentions in the morning, bring a sense of grounding and peace. These practices create space for reflection and presence, allowing us to feel connected to each day.
        </li>
        <li>
        Prioritize Nature Time: Spending even a few minutes outside daily can be transformative. Nature offers a sense of calm and balance, reminding us of the beauty in simplicity and helping us feel part of something larger.
        </li>
        <li>
        Practice Mindfulness: Slow living and mindfulness are closely connected. Being present in daily activities, whether cooking, cleaning, or simply breathing, can deepen our appreciation for each moment and reduce stress.
        </li>
        <li>
        Reduce Digital Overload: Limiting screen time and being mindful of technology use can help us avoid feeling overstimulated. Try setting designated times to check your phone or use social media, allowing your mind to relax and focus on the present.
        </li>
        <li>
        Foster Deep Relationships: Instead of spreading ourselves thin over numerous connections, slow living encourages us to nurture a few meaningful relationships. Quality time with loved ones builds closeness and reminds us of the richness of shared experiences.
        </li>
      </ol>

      </div>
    </div>
  );
}

export default Article;
