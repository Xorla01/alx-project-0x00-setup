import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      
      <Card />
      <Card />
      
      <Button title="Small Radius" size="medium" shape="rounded-sm" styles="extra-classes" />
      <Button title="Medium Radius" size="medium" shape="rounded-md" styles="extra-classes" />
      <Button title="Full Radius" size="medium" shape="rounded-full" styles="extra-classes" />
    </div>
  )
}

export default Landing;
