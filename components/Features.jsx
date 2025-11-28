import { Dumbbell, LineChart, Apple } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Dumbbell,
      title: "Personalized Workout Plans",
      description:
        "Custom training programs tailored to your fitness level, goals, and schedule.",
    },
    {
      icon: LineChart,
      title: "AI-Based Progress Tracking",
      description:
        "Smart analytics and insights to monitor your performance and optimize results.",
    },
    {
      icon: Apple,
      title: "Nutrition & Meal Guidance",
      description:
        "Expert meal plans and nutritional advice to fuel your transformation.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-100 border border-gray-300 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
