import React from 'react';
import './App.css';
import {IApi, IUserPreview} from './types';
import Users from './components/users/Users';
import Pagination from './components/pagination/Pagination';
import withLoading from './hoc/with-loading/with-loading';
import Selector from './components/selector/Selector';
import {IThemeContext, ThemeContext} from './context/ThemeContext';
import Switcher from './components/switcher/Switcher';
import withOpen from './hoc/with-hover/with-open';

interface IAppProps {
  api: IApi;
}
interface IAppState {
  isLoading: boolean;
  users: IUserPreview[];
  page: number;
  pageAmount: number;
  limit: number;
  limitOptions: number[];
}

const UsersWithLoading = withLoading(Users);
const SelectorWithOpen = withOpen(Selector);

class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      isLoading: false,
      users: [],
      page: 0,
      pageAmount: 0,
      limit: 20,
      limitOptions: [5, 10, 20],
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleUsersPageLimitChange = this.handleUsersPageLimitChange.bind(this);
  }

  componentDidMount(): void {
    this.getCurPageUsers();
  }

  private handlePageChange(page: number): void {
    this.setState({page}, () => this.getCurPageUsers());
  }

  private handleUsersPageLimitChange(limit: number) {
    this.setState({limit}, () => this.getCurPageUsers());
  }

  private getCurPageUsers(): void {
    const {api} = this.props;
    const {page, limit} = this.state;
    this.setState({isLoading: true});
    api.getUsers(page, limit).then((list) =>
      this.setState({
        users: list.data,
        pageAmount: Math.ceil(list.total / list.limit),
        isLoading: false,
      })
    );
  }

  static contextType = ThemeContext;

  render(): React.ReactNode {
    const {users, pageAmount, isLoading, limit, page, limitOptions} = this.state;
    const {theme} = this.context as IThemeContext;

    return (
      <div className={`app app--theme_${theme}`}>
        <main className="app__container">
          <h1 className="app__title">Пользователи</h1>
          <UsersWithLoading users={users} isLoading={isLoading} />
          <div className="app__wrap">
            <Pagination value={pageAmount} defaultValue={page} onChange={this.handlePageChange} />
            <SelectorWithOpen options={limitOptions} defaultOption={limit} onChange={this.handleUsersPageLimitChange} />
            <Switcher />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
