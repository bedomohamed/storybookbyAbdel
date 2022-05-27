import { Button } from './Button';
import { render, screen} from "@testing-library/react"
import  { Primary } from "./Button.stories"; 

test('should render', () => {
    render(<Primary {...Primary.args}/>);
    expect(screen.getByRole("button")).toHaveTextContent(/button/i);

})