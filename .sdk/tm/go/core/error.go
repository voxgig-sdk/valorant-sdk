package core

type ValorantError struct {
	IsValorantError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewValorantError(code string, msg string, ctx *Context) *ValorantError {
	return &ValorantError{
		IsValorantError: true,
		Sdk:              "Valorant",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ValorantError) Error() string {
	return e.Msg
}
