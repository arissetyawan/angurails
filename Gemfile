source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.1'
# Use sqlite3 as the database for Active Record
# gem 'sqlite3'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

gem 'devise'
gem 'devise-async'

# *** Gems for Angular *** #
# Respond to ActiveRecord errors in JSON format
gem 'responders'
gem 'angularjs-rails'
gem 'angular-ui-router-rails', :git => 'git@github.com:rodeschen/angular-ui-router-rails.git'
# Convert ruby database in JSON format
gem 'active_model_serializers'
# Manage frontend assets
gem 'bower-rails'
# Allows to write HTML code within js assets folder
# and compile HTML into assets pipeline
gem 'angular-rails-templates'
gem 'sprockets', "~> 3.7.1"

# postgres
gem 'pg'

# to run delayed job
gem 'daemons'
gem 'delayed_job_active_record'
gem 'whenever', :require => false

gem 'faraday'
gem 'faraday_middleware'
gem 'filesize'
gem 'omniauth'
gem 'omniauth-facebook'
gem "recaptcha", require: "recaptcha/rails"
gem 'rails-erd'
gem "friendly_id"
gem 'kaminari'
gem 'paperclip'
gem 'faker'
gem 'bugsnag'
gem "roo", "~> 2.7.0"
gem 'roo-xls'
gem 'roo-google'
gem 'zip-zip'
gem 'axlsx'
# https://github.com/rubysherpas/paranoia
gem "paranoia", github: "arissetyawan/paranoia", branch: "rails5"
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
# gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem "rspec-rails"
end

group :development do
  gem 'brakeman', :require => false

  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'capistrano', '~>3.7.2'
  gem 'capistrano-rails'
  gem 'capistrano-rvm'
  gem 'capistrano3-puma'
  gem 'capistrano3-nginx'
  gem 'capistrano-upload-config'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
