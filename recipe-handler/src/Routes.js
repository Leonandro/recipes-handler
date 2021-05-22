import { Switch, Route } from 'react-router-dom'
import { AddRecipe } from './views/AddRecipe'
import { Home } from './views/Home'
import { SearchRecipe } from './views/SearchRecipe'
import { ViewRecipe } from './views/ViewRecipe'



export const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/addrecipeform" component={AddRecipe} />
            <Route path="/searchrecipepage" component={SearchRecipe} />
            <Route path="/viewrecipe/:name" component={ViewRecipe} />
        </Switch>
    )
}