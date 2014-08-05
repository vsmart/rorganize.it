require 'spec_helper'

describe Role do
  let(:person) { create(:person) }

  it 'does not assign a role to a newly created user' do
    expect(person.has_role?(:admin)).to be_false
  end

  describe 'adding a role' do
    before { person.add_role(:admin) }

    it 'assigns the user an admin role' do
      expect(person.has_role?(:admin)).to be_true
    end
  end

  describe 'removing a role' do
    before do
      person.add_role(:admin)
      person.remove_role(:admin)
    end

    it 'removes the admin role from the person' do
      expect(person.has_role?(:admin)).to be_false
    end
  end
end