import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnV from 'dotenv';

Enzyme.configure({
    adapter: new Adapter()
});

DotEnV.config({ path: '.env.test' });

