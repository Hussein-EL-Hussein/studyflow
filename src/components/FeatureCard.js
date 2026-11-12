const FeatureCard = ({ feature }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-teal-700">
            {feature.title}
        </h2>

        <p className="mt-2 text-slate-600">
            {feature.description}
        </p>
    </div>
  );
};

export default FeatureCard;
