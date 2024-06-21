function skillMember() {
  return {
    restrict: 'E',
    templateUrl: 'modules/skills/views/member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'member',
    bindToController: true,
    scope : {
      member: '='
    }
    };
}