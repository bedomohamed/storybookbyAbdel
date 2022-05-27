import {Card} from './Card'; 

export default {
    component: Card,
    
}

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
    img:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    title: 'Simple Risotto',
    description: 'Fear Risotto no more! This simple recipe is perfect for family dinners.',
};
  