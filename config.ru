# require './app'
# run Sinatra::Application

# ***** GEMS *****
require 'bundler/setup'
Bundler.require

# ***** CONNECTION *****
db = URI.parse(ENV['DATABASE_URL'] || 'postgres://localhost/bisquerie')
ActiveRecord::Base.establish_connection(
:adapter => 'postgresql',
:host     => db.host,
:username => db.user,
:password => db.password,
:database => db.path[1..-1],
:encoding => 'utf8'
)

# ***** HELPERS *****
require './helpers/session_helpers'

# ***** MODELS *****
require './models/party'
require './models/food'
require './models/order'
require './models/user'

# ***** CONTROLLERS *****
require './controllers/foods_controller'
require './controllers/parties_controller'
require './controllers/orders_controller'
require './controllers/sessions_controller'
require './controllers/welcome_controller'

# ***** ROUTING *****
map('/api/foods') { run FoodsController.new() }
map('/api/parties') { run PartiesController.new() }
map('/api/orders') { run OrdersController.new() }
map('/sessions') { run SessionsController.new() }

map('/') { run WelcomeController.new() }
