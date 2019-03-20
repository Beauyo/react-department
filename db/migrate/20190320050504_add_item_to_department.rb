class AddItemToDepartment < ActiveRecord::Migration[5.2]
  def change
    add_reference :departments, :item, foreign_key: true
  end
end
