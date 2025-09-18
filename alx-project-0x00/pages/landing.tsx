import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      
      <Card />
      <Card />
      
     <Button title="Click Me" size="medium" shape="rounded-md" style="extra-classes" />
    </div>
  )
}
export default Landing;