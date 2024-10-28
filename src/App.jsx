import { TableDemo } from './components/ExampleSimpleTable';
import TaskPage from './components/ExampleTable';
import { Separator } from './components/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function App() {
  return (
    <div className='px-10 py-10'>
      <div>
        <h2 className='text-2xl font-bold tracking-tight'>Welcome!</h2>
        <p className='text-muted-foreground'>This is a complex table example</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <TaskPage />
      <Separator />
      <div className='mt-5 px-5'>
        <p className='text-muted-foreground'>This is a simple table example</p>
        <div className='mt-5 px-5 border-2 rounded-lg'>
          <TableDemo />
        </div>
      </div>
    </div>
  );
}

export default App;
