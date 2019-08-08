# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
School.destroy_all
Favorite.destroy_all

feven = User.create(first_name:'feven', last_name:'teclay', password:'1', zip_code: 77081, current_grade:'pre-k')
silva = School.create(school_name:'silva', rating:5,zip_code: 77081, description: 'greate school')
 Favorite.create(user: feven, school: silva)
 