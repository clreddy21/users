class UsersController < ApplicationController

  def index
    @columns = User.columns.map {|c| c.name }
  end

  def get_users
    @users = User.order(params[:column_name_value])
    render :json => {:users => @users}
  end

end