import Ember from 'ember';
import Model from './model';

export default Ember.Component.extend({
    isNotSubmitable: Ember.computed('model.validations.isTruelyValid', 'isProcessing', {
        get: function() {
            return !this.get('model.validations.isTruelyValid') || this.get('isProcessing');
        }
    }),
    init: function() {
        this._super(...arguments);

        this.set('model', Model.create(Ember.getOwner(this).ownerInjection()));
    },
    actions: {
        submit: function() {
            this.get('model').validate();

            if (this.get('model.validations.isValid')) {
                this.sendAction('validated', this.get('model'));
            }
        },
    }
});
