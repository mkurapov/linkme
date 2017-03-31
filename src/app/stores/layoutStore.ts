import { observable, computed, action } from 'mobx';

class LayoutStore {
  @observable showAddModal = false;

  @action openAddModal() {
    this.showAddModal = true;
  }

  @action closeAddModal() {
    this.showAddModal = false;
  }





  @computed get filteredTodos() {
    return null;
  }


}
export default new LayoutStore();
