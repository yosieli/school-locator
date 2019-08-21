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
crockett = School.create(school_name:'Crockett Elementary School', rating:3, zip_code: 77007, description: 'Professional staff always make you feel welcomed',grade: 'pre-k',latitude: 29.774787,longitude: -95.380721)
port = School.create(school_name:'Port Houston Elementary School', rating:2.7, zip_code: 71001, description: 'greate school',grade: 'pre-k',latitude: 29.763005, longitude: -95.282988)
cathedral = School.create(school_name:'Cathedral House Episcopal School', rating:5, zip_code: 77002, description: 'The best school',grade: 'grade-01',latitude: 29.759994, longitude: -95.360919)
carnegie = School.create(school_name:'Carnegie Vanguard High School', rating:4.6, zip_code: 77004, description: 'greate school',grade: 'grade-01',latitude: 29.755203,longitude: -95.385101)
heights = School.create(school_name:'Heights High School', rating:4.3, zip_code: 77008, description: 'greate school',grade:'grade-2',latitude: 29.796915, longitude: -95.392905)
lamar = School.create(school_name:'Cathedral House Episcopal School', rating:3.3, zip_code: 77098, description: 'Definitely a good school, would highly recommend it,',grade:'grade-2',latitude: 29.743212, longitude: -95.425804)
cunningham = School.create(school_name:'Cunningham Elementary School', rating:3.7, zip_code: 77081, description: 'it’s a Good school students can learn and do extra activities',grade:'grade-3',latitude: 29.723074,longitude: -95.468582)
heights = School.create(school_name:'Heights High School', rating:4.3, zip_code: 77008, description: 'greate school',grade:'grade-3',latitude: 29.796915, longitude: -95.392905)
lamar = School.create(school_name:'Cathedral House Episcopal School', rating:3.3, zip_code: 77098, description: 'greate school',grade:'grade-4',latitude: 29.743212, longitude: -95.425804)
School.create(school_name:'River Oaks Elementary School', rating:5, zip_code: 77019, description: 'greate school/excellent teachers',grade:'grade-4',latitude: 29.750409, longitude: -95.419964)
School.create(school_name:'Condit Elementary School', rating:3.3, zip_code: 77019, description: 'The school is amazing.The teachers are so nice.',grade:'grade-5',latitude: 29.7099264, longitude: -95.4884096)
School.create(school_name:'Rodriguez Elementary School', rating:4.3, zip_code: 77081, description: 'Definitely a good school, would highly recommend it,',grade:'grade-5',latitude: 29.696414, longitude: -95.489391)
School.create(school_name:'Energized for Excellence Academy', rating:4.3, zip_code: 77081, description: 'Definitely a good school, would highly recommend it,',grade:'grade-6',latitude: 29.696414, longitude: -95.489391)
School.create(school_name:'Southwest Middle School', rating:3.5, zip_code: 77081, description: 'The best school',grade:'6-grade',latitude: 29.724538 ,longitude: -95.499681)
School.create(school_name:'Pershing Middle School', rating:4.3, zip_code: 77025, description: 'it’s a Good school students can learn and do extra activities',grade:'grade-7',latitude: 29.702959, longitude: -95.439155)
School.create(school_name:'Long Junior High School', rating:3.3, zip_code: 77025, description: 'greate school. nice teachers.',grade:'grade-7',latitude: 29.705073, longitude: -95.499361)
School.create(school_name:'Pin Oak Middle School', rating:3.9, zip_code: 77401, description: 'This is good school. They are trying there best for students.',grade:'grade-8',latitude: 29.721024, longitude: -95.456824)
School.create(school_name:'Briarmeadow Charter School', rating:4.4, zip_code: 77401, description: 'great learning environment',grade:'grade-8',latitude:29.727820, longitude: -95.512993)
School.create(school_name:'Veritas Christian Academy of Houston', rating:5, zip_code: 77401, description: 'wonderful place',grade:'grade-9',latitude: 29.703761, longitude: -95.473076)
School.create(school_name:'St. Michael Learning Academy', rating:4.2, zip_code: 77057, description: 'Professional staff always make you feel welcomed',grade:'grade-9',latitude: 29.724963, longitude: -95.493073)
School.create(school_name:'Bellaire High School', rating:4.8, zip_code:  77401, description: 'greate school/excellent teachers',grade:'grade-10',latitude: 29.692650, longitude: -95.469005)
School.create(school_name:'Challenge Early College High School', rating:4.0, zip_code: 770401, description: 'The school is amazing.The teachers are so nice.',grade:'grade-10',latitude: 29.723417, longitude: -95.457254)
School.create(school_name:'Aquilla Wyatt High School', rating:4.3, zip_code: 77081, description: 'Definitely a good school, would highly recommend it,',grade:'grade-11',latitude: 29.720960, longitude: -95.499473)
School.create(school_name:'Wisdom High School', rating:3.9, zip_code: 77081, description: 'The best school',grade:'grade-11',latitude: 29.729375 ,longitude: -95.499895)
School.create(school_name:'Liberty High School', rating:3.3, zip_code: 77025, description: 't’s a Good school students can learn and do extra activities',grade:'grade-12',latitude: 29.699387, longitude: -95.531532)
School.create(school_name:'Sharpstown High School', rating:3.9, zip_code: 77025, description: 'greate school. nice teachers.',grade:'grade-12',latitude: 29.686609, longitude: -95.515092)
School.create(school_name:'Field Elementary School', rating:4.3, zip_code: 77008, description: 'great learning environment',grade:'pre-k',latitude:29.802052, longitude: -95.389106)
School.create(school_name:'Veritas Christian Academy of Houston', rating:5, zip_code: 77402, description: 'wonderful place',grade:'grade-01',latitude: 29.715047, longitude: -95.412112)
School.create(school_name:'St. Michael Learning Academy', rating:4.2, zip_code: 77057, description: 'Professional staff always make you feel welcomed',grade:'grade-2',latitude: 29.832939, longitude: -95.370227)
School.create(school_name:'Bellaire Elementary  School', rating:4.8, zip_code:  77402, description: 'greate school/excellent teachers',grade:'grade-3',latitude: 29.718399, longitude: -95.435307)
School.create(school_name:'Challenge Early  School', rating:4.0, zip_code: 77402, description: 'The school is amazing.The teachers are so nice.',grade:'grade-4',latitude: 29.807982, longitude: -95.406986)
School.create(school_name:'Aquilla Wyatt Elementary School', rating:4.3, zip_code: 77081, description: 'Definitely a good school, would highly recommend it,',grade:'grade-5',latitude: 29.662584, longitude: -95.465046)
School.create(school_name:'Wisdom  School', rating:3.9, zip_code: 77081, description: 'The best school',grade:'grade-6',latitude: 29.701632 ,longitude: -95.438029)
School.create(school_name:'Liberty Middle School', rating:3.3, zip_code: 77025, description: 't’s a Good school students can learn and do extra activities',grade:'grade-7',latitude: 29.680080, longitude: -95.308144)
School.create(school_name:'Sharpstown Middle School', rating:3.9, zip_code: 77025, description: 'greate school. nice teachers.',grade:'grade-8',latitude: 29.807556, longitude: -95.317698)
School.create(school_name:'Briarmeadow Charter School', rating:4.4, zip_code: 77401, description: 'great learning environment',grade:'grade-9',latitude:29.841047, longitude: -95.416954)
School.create(school_name:'Veritas Christian Academy of Houston', rating:5, zip_code: 77401, description: 'wonderful place',grade:'grade-10',latitude: 29.685136, longitude: -95.375135)
School.create(school_name:'St. Michael Learning Academy', rating:4.2, zip_code: 77057, description: 'Professional staff always make you feel welcomed',grade:'grade-11',latitude: 29.797185, longitude: -95.428382)
School.create(school_name:'Bellaire High School', rating:4.8, zip_code:  77401, description: 'greate school/excellent teachers',grade:'grade-12',latitude: 29.698707, longitude: -95.455775)








 Favorite.create(user: feven, school: crockett)
 Favorite.create(user: feven, school: port)


