class Api::V1::SessionsController < ApplicationController
# before_save :send_username  #this can be used to handle sign ups via fb
    def new
      @errors = []
    end

    def create
        @user = User.find_by(username: params[:session][:username])
        if @user && @user.authenticate(params[:session][:password])
            session[:user_id] = @user.id
            render json: UserSerializer.new(@user)
        elsif @user
            render json: {
              error: "Invalid Password"
            }
     
          else
            render json: {
              error: "Invalid Username"
            }
 
          end
    end

    def create_with_fb
        
        user = User.find_or_create_by(username: fb_auth['info']['username'], username: fb_auth['info']['name']) do |r|
          r.password = 'password' #we set their password here and it doesn't matter what it is, could autogenerate it
          #here we can send them an username with their temporary/current autogenerated pw which they can change at a later time
        end
        if user.save
          session[:user_id] = user.id
          redirect_to "/users"
        else
          redirect_to signup_path
        end
    end
    
    def destroy
        session.clear
        redirect_to '/login'
    end

    private

        def fb_auth
            self.request.env['omniauth.auth']
        end
        
    
end