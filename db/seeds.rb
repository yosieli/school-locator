# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
School.delete_all
Favorite.delete_all

feven = User.create(first_name:'feven', last_name:'teclay', password:'1', zip_code: 77081, current_grade:'Pre-kindergarten')
yosyas = User.create(first_name: 'yosyas', last_name: 'tsegay', password: '1',zip_code: 77079, current_grade: 'first_grade')
crockett = School.create(school_name:'Crockett Elementary School', rating:3, zip_code: 77007, description: 'greate school',latitude: 29.774787,longitude: -95.380721)
port = School.create(school_name:'Port Houston Elementary School', rating:2.7, zip_code: 71001, description: 'greate school',latitude: 29.763005, longitude: -95.282988)
cathedral = School.create(school_name:'Cathedral House Episcopal School', rating:5, zip_code: 77002, description: 'greate school',latitude: 29.759994, longitude: -95.360919)
carnegie = School.create(school_name:'Carnegie Vanguard High School', rating:4.6, zip_code: 77019, description: 'greate school',latitude: 29.755203,longitude: -95.385101)
heights = School.create(school_name:'Heights High School', rating:4.3, zip_code: 77008, description: 'greate school',latitude: 29.796915, longitude: -95.392905)
lamar = School.create(school_name:'Cathedral House Episcopal School', rating:3.3, zip_code: 77098, description: 'greate school',latitude: 29.743212, longitude: -95.425804)
cunningham = School.create(school_name:'Cunningham Elementary School', rating:3.7, zip_code: 77081, description: 'greate school',latitude: 29.723074,longitude: -95.468582)
heights = School.create(school_name:'Heights High School', rating:4.3, zip_code: 77008, description: 'greate school',latitude: 29.796915, longitude: -95.392905)
lamar = School.create(school_name:'Cathedral House Episcopal School', rating:3.3, zip_code: 77098, description: 'greate school',latitude: 29.743212, longitude: -95.425804)


 Favorite.create(user: feven, school: crockett)
 Favorite.create(user: feven, school: port)


