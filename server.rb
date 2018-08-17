require 'sinatra'
require 'sinatra/activerecord'

set :database, 'sqlite3:write-comments.sqlite3'

get '/' do
  @posts = Post.all
  erb :home
end

post '/' do
  post = Post.create(
    title: params['title'],
    body: params['body']
  )
  url = '/'
  redirect url
end

require './models'
