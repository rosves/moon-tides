import React from "react";
import "./Article.scss";
import img from "../assets/images/article_img.png";
import Articles from "../components/Articles";
import HitomiPlus from "../components/HitomiPlus";
import Header2 from '../components/Header2';
import { ReactComponent as Divider } from "../assets/divider.svg";


function Article() {
  return (
    <div>
      {/* global container */}
      <Header2/>
      <div className="articlePage_container">
        {/* main title */}
        <h1 className="articlePage_maintitle">
          <span>E</span>mbracing the Art of Slow Living: Finding Peace in a
          Fast-Paced World
        </h1>
        {/* infos under main title */}
        <div className="infos">
          <p>by xxx</p>
          <p>date</p>
          <p></p>
        </div>
        {/* intro */}
        <span className="intro">
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
        <Divider className="divider"/>
        {/* text  / content */}
        <h2>
          <span>W</span>hat is Slow Living?
        </h2>

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
        
        <h2>
          <span>H</span>ow to Begin Embracing Slow Living
        </h2>
        <span className="intro">
          Slow living doesn’t require drastic changes; it’s about making small,
          meaningful adjustments to daily life. Here are a few steps to help you
          start:
        </span>
        <ol className="intro">
          <li>
            Create Daily Rituals: Simple rituals, like lighting a candle at
            sunrise or setting intentions in the morning, bring a sense of
            grounding and peace. These practices create space for reflection and
            presence, allowing us to feel connected to each day.
          </li>
          <li>
            Prioritize Nature Time: Spending even a few minutes outside daily
            can be transformative. Nature offers a sense of calm and balance,
            reminding us of the beauty in simplicity and helping us feel part of
            something larger.
          </li>
          <li>
            Practice Mindfulness: Slow living and mindfulness are closely
            connected. Being present in daily activities, whether cooking,
            cleaning, or simply breathing, can deepen our appreciation for each
            moment and reduce stress.
          </li>
          <li>
            Reduce Digital Overload: Limiting screen time and being mindful of
            technology use can help us avoid feeling overstimulated. Try setting
            designated times to check your phone or use social media, allowing
            your mind to relax and focus on the present.
          </li>
          <li>
            Foster Deep Relationships: Instead of spreading ourselves thin over
            numerous connections, slow living encourages us to nurture a few
            meaningful relationships. Quality time with loved ones builds
            closeness and reminds us of the richness of shared experiences.
          </li>
        </ol>
        <h2>The Benefits of Slow Living for Mental Health</h2>
        <p>
          Living in alignment with a slower pace brings numerous benefits to
          mental health. Studies show that embracing a slower lifestyle can
          reduce anxiety, improve focus, and foster a sense of inner calm. It
          also encourages emotional resilience, allowing us to process feelings
          more mindfully. For people like Hitomi and her followers, who
          prioritize wellness and spiritual growth, slow living is a pathway to
          achieving deeper peace, balance, and clarity.
        </p>
        <h2>Why Slow Living Matters</h2>
        <p>
          Choosing slow living is, in many ways, a return to our roots—a way of
          life that honors natural rhythms and meaningful connections. For
          communities centered on wellness and spiritual growth, like Hitomi
          Mochizuki’s, slow living aligns with core values of mindfulness,
          sustainability, and self-connection. It’s a powerful act of self-care
          in a world that often prioritizes speed, and it helps us rediscover
          our innate capacity for calm, resilience, and joy.
          <br />
          In a fast-paced world, choosing to live slowly is a radical act that
          encourages us to focus on what truly matters. Whether it’s through
          daily rituals, time in nature, or meaningful connections, slow living
          offers a path to fulfillment and a deeper connection to our authentic
          selves.
        </p>
      </div>

      <Articles />
      <HitomiPlus />
    </div>
  );
}

export default Article;
