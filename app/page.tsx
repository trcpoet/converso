import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import { getSubjectColor } from "@/lib/utils";

// Sample data until companions come from the database
const popularCompanions = recentSessions.slice(0, 3);

const Page = () => {
  return (
    <main>
      <h1>Dashboard</h1>

      <section className="home-section">
        {popularCompanions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed lessons"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
