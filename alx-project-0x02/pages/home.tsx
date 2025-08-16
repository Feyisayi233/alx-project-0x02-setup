import Card from "../components/common/Card";

const HomePage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-8">
    <h1 className="text-3xl font-bold mb-4">Home Page</h1>
    <Card title="Card 1" content="This is the content of Card 1." />
    <Card title="Card 2" content="This is the content of Card 2." />
    <Card title="Card 3" content="This is the content of Card 3." />
  </div>
);

export default HomePage;
