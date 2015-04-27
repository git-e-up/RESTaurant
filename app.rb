require 'bundler'
Bundler.require()

require './models/food.rb'
require './models/order.rb'
require './models/party.rb'


ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'bisquerie'
)


get '/' do
  erb :index
end

get '/api/foods' do
  content_type :json
  food = Food.all
  food.to_json
end


get '/api/foods/:id' do
  content_type :json
  food = Food.find(params[:id].to_i)
  food.to_json
end

post '/api/foods' do
  content_type :json
  food = Food.create(params[:food])
  food.to_json
end

patch '/api/foods/:id' do
  content_type :json
  food = Food.find(params[:id].to_i)
  food.update(params[:food])
end

put '/api/foods/:id' do
  content_type :json
  food = Food.find(params[:id].to_i)
  food.update(params[:food])
end

delete '/api/foods/:id' do
  content_type :json
  food = Food.find(params[:id].to_i)
  food.destroy
end

# *****------------------------------------------------------------------*********

get '/' do
  erb :index
end

get '/api/orders' do
  content_type :json
  order = Order.all
  order.to_json
end


get '/api/orders/:id' do
  content_type :json
  order = Order.find(params[:id].to_i)
  order.to_json
end

post '/api/orders' do
  content_type :json
  order = Order.create(params[:order])
  order.to_json
  # sentence = '/api/orders'
  # {sentence: sentence}.to_json
end

patch '/api/orders/:id' do
  content_type :json
  order = Order.find(params[:id].to_i)
  order.update(params[:order])
end

put '/api/orders/:id' do
  content_type :json
  order = Order.find(params[:id].to_i)
  order.update(params[:order])
end

delete '/api/orders/:id' do
  content_type :json
  order = Order.find(params[:id].to_i)
  order.destroy
end


# ****---------------------------------------------------------------------******

get '/' do
  erb :index
end

get '/api/parties' do
  content_type :json
  party = Party.all
  party.to_json
end


get '/api/parties/:id' do
  content_type :json
  party = Party.find(params[:id].to_i)
  party.to_json
end

post '/api/parties' do
  content_type :json
  party = Party.create(params[:party])
  party.to_json
end

patch '/api/parties/:id' do
  content_type :json
  party = Party.find(params[:id].to_i)
  party.update(params[:party])
end

put '/api/parties/:id' do
  content_type :json
  party = Party.find(params[:id].to_i)
  party.update(params[:party])
end

delete '/api/parties/:id' do
  content_type :json
  party = Party.find(params[:id].to_i)
  party.destroy
end
